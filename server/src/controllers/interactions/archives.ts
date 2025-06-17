import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const add = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingArchive = await prisma.archive.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			if (existingArchive) {
				res.status(400).json({ message: "You have already archived this article!" });
			} else {
				const archive = await prisma.archive.create({
					data: {
						userId: user.id,
						country: user.country,
						nArticleId: Number(article_id),
					},
				});
				res.status(200).json({
					message: "Success at creating a archive!",
					payload: archive,
				});
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a archive!", payload: err.message });
	}
};

export const get = async (req: Request, res: Response) => {
	const { specification, id } = req.params;

	try {
		let archives;

		if (specification !== "all") {
			archives = await prisma.archive.findMany({
				where: {
					[specification]: Number(id),
				},
			});
		} else {
			archives = await prisma.archive.findMany();
		}

		res.status(200).json({
			message: "Success at retrieving archives data!",
			length: archives.length,
			payload: archives,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve archives data!", payload: err.message });
	}
};

export const remove = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingArchive = await prisma.archive.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			// If the archive exists, delete it
			if (existingArchive) {
				await prisma.archive.delete({
					where: {
						id: existingArchive.id,
					},
				});
				res.status(200).json({ message: "archive successfully removed!" });
			} else {
				res.status(400).json({ message: "You have not archived this article!" });
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to remove archive!", payload: err.message });
	}
};

export const archived = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingArchive = await prisma.archive.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			if (existingArchive) {
				res.status(200).json({ message: "User has archived the article", archived: true });
			} else {
				res.status(200).json({ message: "User has not archived the article", archived: false });
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to check archive status!", payload: err.message });
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.archive.deleteMany();

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

export const getUserArchives = async (req: Request, res: Response) => {
	const { user_id } = req.params;

	try {
		const user = await prisma.user.findUnique({
			where: { id: Number(user_id) },
		});

		if (!user) {
			res.status(404).json({ message: "User not found!" });
		} else {
			const archives = await prisma.archive.findMany({
				where: { userId: Number(user_id) },
				select: {
					NArticle: {},
				},
			});
			const archivedArticles = archives.map((archive) => archive.NArticle);
			res.status(200).json({
				message: "Success retrieving archived articles!",
				payload: archivedArticles,
			});
		}
	} catch (err: any) {
		res.status(500).json({
			message: "Failed to retrieve user archives!",
			payload: err.message,
		});
	}
};
