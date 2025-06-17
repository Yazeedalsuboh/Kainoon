import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const all = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.nArticle.findMany();
		res.status(200).json({
			message: "Success at retrieving all articles!",
			length: articles.length,
			payload: articles,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve all articles!", payload: err.message });
	}
};

export const add = async (req: Request, res: Response) => {
	const { headline, content, date, image } = req.body;

	try {
		const newArticle = await prisma.nArticle.create({
			data: {
				headline,
				content,
				date,
				image,
			},
		});

		res.status(200).json({
			message: "Success at add a article!",
			payload: newArticle,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to add a article!", payload: err.message });
	}
};

export const byId = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const article = await prisma.nArticle.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				clicks: true,
				Copy: true,
				likes: true,
				shares: true,
				archives: true,
				Comment: true,
			},
		});
		res.status(200).json({ message: "Success at retrieving the article!", payload: article });
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve the article!", payload: err.message });
	}
};

export const remove = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const articles = await prisma.nArticle.delete({
			where: {
				id: Number(id),
			},
		});

		res.status(200).json({
			message: "Success at deleting the article!",
			payload: articles,
		});
	} catch (err: any) {
		res.status(500).json({
			message: "Failed to delete the article!",
			payload: err.message,
		});
	}
};
