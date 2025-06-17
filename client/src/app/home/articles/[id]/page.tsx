import React from "react";
import { Typography, Grid2, CardMedia, Chip, Card, CardContent } from "@mui/material";
import Click from "./components/interactions/Click";
import Copy from "./components/interactions/Copy";
import ShareBar from "./components/interactions/ShareBar";
import { Topic } from "@/app/types";
import Like from "./components/interactions/Like";
import Archive from "./components/interactions/Archive";
import Comment from "./components/interactions/Comment";

const formatDate = (timestamp: any) => {
	if (!timestamp) return "Unknown date";
	try {
		const date = new Date(timestamp);
		return date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
	} catch (error) {
		return "Invalid date";
	}
};

const Page = async ({ params }: { params: { id: number } }) => {
	let article = await fetch(`http://localhost:4000/api/narticles/${params.id}`, {
		cache: "no-store",
	}).then((res) => res.json().then((data) => data.payload));

	return (
		<Grid2 container size={{ xs: 12 }} sx={{ justifyContent: "center" }}>
			<Grid2 container size={{ xs: 12 }} direction='column' rowSpacing={{ xs: 2 }}>
				<Grid2 container direction='column' size={{ xs: 12 }} sx={{ boxShadow: 3, padding: 2 }}>
					<CardMedia component='img' image={`${article.image}`} alt='' />
					<Typography variant='h3' sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
						{article.headline}
					</Typography>
					<Typography variant='body1' color='initial' sx={{ fontFamily: "inherit" }}>
						{article.date.substring(0, 10)}
					</Typography>
					<Grid2 container columnSpacing={{ xs: 1 }} size={12} sx={{ justifyContent: "flex-start", alignItems: "center" }}>
						<ShareBar article_id={params.id} />
					</Grid2>
					<Grid2 container columnSpacing={{ xs: 1 }} size={12} sx={{ justifyContent: "flex-start", alignItems: "center" }}>
						<Like article_id={params.id} likes={article.likes.length} />
						<Archive article_id={params.id} archives={article.archives.length} />
					</Grid2>

					<Grid2 container size={{ xs: 10 }}>
						<Typography variant='h6' sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
							{article.content}
						</Typography>
					</Grid2>
				</Grid2>
			</Grid2>

			<Click article_id={params.id} />
			<Copy article_id={params.id} />

			<Comment article_id={params.id} />

			<Grid2 size={{ xs: 12 }} direction='column' rowSpacing={{ xs: 2 }} sx={{ marginTop: 2 }}>
				<Typography variant='h5' sx={{ fontWeight: "bold" }}>
					التعليقات
				</Typography>
				{article.Comment.map((comment: any, index: any) => (
					<Card key={index} sx={{ boxShadow: 2, padding: 2 }}>
						<CardContent>
							<Typography variant='body1'>{comment.text}</Typography>
							<Typography variant='caption' color='textSecondary'>
								- {comment.name} from {comment.country} ({formatDate(comment.timestamp)})
							</Typography>
						</CardContent>
					</Card>
				))}
			</Grid2>
		</Grid2>
	);
};

export default Page;
