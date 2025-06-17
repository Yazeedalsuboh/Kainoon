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
			const click = await prisma.click.create({
				data: {
					user_id: user.id,
					country: user.country,
					nArticleId: Number(article_id),
				},
			});
			res.status(200).json({
				message: "Success at creating a click!",
				payload: click,
			});
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a click!", payload: err.message });
	}
};

export const data = async (req: Request, res: Response) => {
	const { specification, id } = req.params;

	try {
		let clicks;

		if (specification !== "all") {
			clicks = await prisma.click.findMany({
				where: {
					[specification]: Number(id),
				},
			});
		} else {
			clicks = await prisma.click.findMany();
		}

		res.status(200).json({
			message: "Success at retrieving clicks data!",
			length: clicks.length,
			payload: clicks,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve clicks data!", payload: err.message });
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.click.deleteMany();

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
