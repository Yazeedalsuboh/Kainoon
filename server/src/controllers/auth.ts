import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";
import { JWT_SECRET } from "../config/secrets";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";

export const all = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			include: { likes: true },
		});
		res.status(200).json({
			message: "Success at retrieving all users!",
			length: users.length,
			payload: users,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve all users!", payload: err.message });
	}
};

export const signup = async (req: Request, res: Response) => {
	const { name, email, password, age, gender, country } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				age,
				gender,
				country,
			},
		});
		console.log(user);
		res.status(201).json({
			message: "User created successfully",
			user: user,
		});
	} catch (error: any) {
		console.log(error);
		if (error.code === "P2002") {
			res.status(409).json({ message: "Email already exists." });
		}
		res.status(500).json({ message: "Internal server error" });
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).json({ message: "Email and password are required." });
	} else {
		try {
			// Find user by email
			const user = await prisma.user.findUnique({
				where: { email },
			});

			if (!user) {
				res.status(404).json({ message: "User not found." });
			} else {
				// Check if password is correct
				const isPasswordValid = await bcrypt.compare(password, user.password);

				if (!isPasswordValid) {
					res.status(401).json({ message: "Invalid credentials." });
				} else {
					// Create a JWT token
					const token = jwt.sign(
						{ id: user.id, email: user.email },
						JWT_SECRET as string, // Secret key
						{ expiresIn: "1h" } // Token expiration time
					);

					//  success response with token
					res.status(200).json({
						message: "Login successful",
						token: token,
						name: user.name,
						email: user.email,
						user: user.id,
					});
				}
			}
		} catch (error) {
			res.status(500).json({ message: "Internal server error" });
		}
	}
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.header("Authorization");
	if (!token) return res.status(401).json({ error: "Access denied" });
	try {
		const decoded = jwt.verify(token, JWT_SECRET as string);
		(req as Request & { id?: string }).id = (decoded as JwtPayload).id;
		next();
	} catch (error) {
		res.status(401).json({ error: "Invalid token" });
	}
};
