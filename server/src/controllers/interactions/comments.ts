import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const add = async (req: Request, res: Response) => {
	const { id, article_id, text } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { id: Number(id) },
		});

		if (user) {
			const comment = await prisma.comment.create({
				data: {
					country: user.country,
					nArticleId: Number(article_id),
					userId: Number(user.id),
					text,
					name: user.name,
				},
			});
			res.status(200).json({
				message: "Success at creating a comment!",
				payload: comment,
			});
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a comment!", payload: err.message });
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.comment.deleteMany();

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
