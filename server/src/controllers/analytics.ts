import { Request, Response } from "express";
import { prisma } from "../config/prisma";

type Interaction = "shares";

export const dataset = async (req: Request, res: Response) => {
	try {
		const clicks = await prisma.click
			.findMany({
				select: {
					timestamp: true,
					user_id: true,
					country: true,
					NArticle: {
						select: {
							content: true,
							id: true,
							headline: true,
						},
					},
				},
			})
			.then((clicks) =>
				clicks.map((click) => ({
					...click,
					eventType: "Click",
				}))
			);

		const copies = await prisma.copy
			.findMany({
				select: {
					timestamp: true,
					user_id: true,
					country: true,
					NArticle: {
						select: {
							content: true,
							id: true,
							headline: true,
						},
					},
				},
			})
			.then((copies) =>
				copies.map((copy) => ({
					...copy,
					eventType: "Copy",
				}))
			);

		const shares = await prisma.share
			.findMany({
				select: {
					timestamp: true,
					user_id: true,
					country: true,
					NArticle: {
						select: {
							content: true,
							id: true,
							headline: true,
						},
					},
				},
			})
			.then((shares) =>
				shares.map((share) => ({
					...share,
					eventType: "Share",
				}))
			);

		const likes = await prisma.like
			.findMany({
				select: {
					timestamp: true,
					userId: true,
					country: true,
					NArticle: {
						select: {
							headline: true,
							id: true,
							content: true,
						},
					},
				},
			})
			.then((likes) =>
				likes.map((like) => ({
					...like,
					eventType: "Like",
				}))
			);

		const archives = await prisma.archive
			.findMany({
				select: {
					timestamp: true,
					country: true,
					userId: true,
					NArticle: {
						select: {
							headline: true,
							id: true,
							content: true,
						},
					},
				},
			})
			.then((archives) =>
				archives.map((archive) => ({
					...archive,
					eventType: "Archive",
				}))
			);

		const comments = await prisma.comment
			.findMany({
				select: {
					timestamp: true,
					userId: true,
					country: true,
					NArticle: {
						select: {
							headline: true,
							id: true,
							content: true,
						},
					},
				},
			})
			.then((comments) =>
				comments.map((comment) => ({
					...comment,
					eventType: "Comment",
				}))
			);

		const allInteractions = [...shares, ...likes, ...archives, ...clicks, ...copies, ...comments];
		res.setHeader("Content-Type", "application/json; charset=utf-8");

		res.json({ message: "Interactions Successfully retrieved", length: allInteractions.length, allInteractions });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
};
