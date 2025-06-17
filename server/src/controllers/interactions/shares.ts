import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const add = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (user) {
			const share = await prisma.share.create({
				data: {
					user_id: user.id,
					country: user.country,
					nArticleId: Number(article_id),
				},
			});
			res.status(200).json({
				message: "Success at creating a share!",
				payload: share,
			});
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a share!", payload: err.message });
	}
};

export const data = async (req: Request, res: Response) => {
	const { specification, id } = req.params;

	try {
		let shares;

		if (specification !== "all") {
			shares = await prisma.share.findMany({
				where: {
					[specification]: Number(id),
				},
			});
		} else {
			shares = await prisma.share.findMany();
		}

		res.status(200).json({
			message: "Success at retrieving shares data!",
			length: shares.length,
			payload: shares,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve shares data!", payload: err.message });
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.share.deleteMany();

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
