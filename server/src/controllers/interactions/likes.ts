import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const add = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingLike = await prisma.like.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			// If a like already exists, return a response indicating the user can only like once
			if (existingLike) {
				res.status(400).json({ message: "You have already liked this article!" });
			} else {
				const like = await prisma.like.create({
					data: {
						country: user.country,
						nArticleId: Number(article_id),
						userId: Number(user.id),
					},
				});
				res.status(200).json({
					message: "Success at creating a like!",
					payload: like,
				});
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to create a like!", payload: err.message });
	}
};

export const get = async (req: Request, res: Response) => {
	const { specification, id } = req.params;

	try {
		let likes;

		if (specification !== "all") {
			likes = await prisma.like.findMany({
				where: {
					[specification]: Number(id),
				},
			});
		} else {
			likes = await prisma.like.findMany();
		}

		res.status(200).json({
			message: "Success at retrieving likes data!",
			length: likes.length,
			payload: likes,
		});
	} catch (err: any) {
		res.status(500).json({ message: "Failed to retrieve likes data!", payload: err.message });
	}
};

export const remove = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingLike = await prisma.like.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			// If the like exists, delete it
			if (existingLike) {
				await prisma.like.delete({
					where: {
						id: existingLike.id,
					},
				});
				res.status(200).json({ message: "Like successfully removed!" });
			} else {
				res.status(400).json({ message: "You have not liked this article!" });
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to remove like!", payload: err.message });
	}
};

export const liked = async (req: Request, res: Response) => {
	const { email, article_id } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (user) {
			const existingLike = await prisma.like.findFirst({
				where: {
					userId: user.id,
					nArticleId: Number(article_id),
				},
			});

			// Return true if a like exists, otherwise false
			if (existingLike) {
				res.status(200).json({ message: "User has liked the article", liked: true });
			} else {
				res.status(200).json({ message: "User has not liked the article", liked: false });
			}
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err: any) {
		res.status(500).json({ message: "Failed to check like status!", payload: err.message });
	}
};

export const getUserLikes = async (req: Request, res: Response) => {
	const { user_id } = req.params;

	try {
		const user = await prisma.user.findUnique({
			where: { id: Number(user_id) },
		});

		if (!user) {
			res.status(404).json({ message: "User not found!" });
		} else {
			const likes = await prisma.like.findMany({
				where: { userId: Number(user_id) },
				select: {
					NArticle: {},
				},
			});
			const likedArticles = likes.map((like) => like.NArticle);
			res.status(200).json({
				message: "Success retrieving liked articles!",
				payload: likedArticles,
			});
		}
	} catch (err: any) {
		res.status(500).json({
			message: "Failed to retrieve user likes!",
			payload: err.message,
		});
	}
};

export const clear = async (req: Request, res: Response) => {
	try {
		const articles = await prisma.like.deleteMany();

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
