import React from "react";
import { Grid2, CardMedia, Typography, Chip, Link } from "@mui/material";
import { Topic, Article } from "@/app/types";

const ArticleCard = async ({ article }: { article: Article }) => {
	return (
		<Grid2 container spacing={{ xs: 0 }} columnSpacing={{ xs: 2 }} size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center" }}>
			<Grid2 size={{ xs: 6 }} display={{ display: "flex" }}>
				<CardMedia component='img' sx={{ borderRadius: 2 }} image={`${article?.top_image}`} alt='John Wick Chapter 4' />
			</Grid2>
			<Grid2 container direction='column' size={{ xs: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
				<Typography color='primary' variant='h5' sx={{ fontWeight: "bold", fontFamily: "inherit" }}>
					{Math.ceil(article?.text.trim().split(/\s+/).length * 0.004)}
					<span> دقائق للقراءة</span>
				</Typography>
				<Typography variant='body1' color='initial' sx={{ fontFamily: "inherit" }}>
					{article?.publish_date.substring(0, 10)}
				</Typography>
				<Link href={`/home/articles/${article.id}`} color='initial' sx={{ fontWeight: "bold", fontFamily: "inherit" }} variant='h4' underline='hover'>
					{article?.title}
				</Link>
				<Typography variant='h6' color='textSecondary' sx={{ marginTop: 1, fontFamily: "inherit" }}>
					{article?.text.substring(0, article?.text.indexOf(".") + 1)}
				</Typography>
				<Grid2 container size={{ xs: 12 }} columnSpacing={{ xs: 1 }} sx={{ display: "flex" }}>
					{article?.topics.map((topic: Topic) => (
						<Chip label={topic.name} sx={{ fontSize: 18 }} variant='outlined' color='primary' />
					))}
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default ArticleCard;
