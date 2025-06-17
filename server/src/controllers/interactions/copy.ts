import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const add = async (req: Request, res: Response) => {
	const { email, article_id, text } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (user) {
			const copy = await prisma.copy.create({
				data: {
					user_id: user.id,
					country: user.country,
					nArticleId: Number(article_id),
					text,
				},
			});
			res.status(200).json({
				message: "Success at creating a copy!",
				payload: copy,
			});
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a copy!", payload: err.message });
	}
};

export const data = async (req: Request, res: Response) => {
	const { specification, id } = req.params;

	try {
		let copies;

		if (specification !== "all") {
			copies = await prisma.copy.findMany({
				where: {
					[specification]: Number(id),
				},
			});
		} else {
			copies = await prisma.copy.findMany();
		}

		res.status(200).json({
			message: "Success at retrieving copies data!",
			length: copies.length,
			payload: copies,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve copies data!", payload: err.message });
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.copy.deleteMany();

		res.status(200).json({
			message: "Success at deleting all articles!",
			payload: articles,
		});
	} catch (err: any) {
		res.status(500).json({
			message: "Failed to delete all articles!",
			payload: err.message,
		});
	}
};
