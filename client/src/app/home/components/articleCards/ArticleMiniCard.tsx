import React from "react";
import { Grid2, CardMedia, Typography, Chip, Link } from "@mui/material";

import { Topic, Article, NArticle } from "@/app/types";

const ArticleMiniCard = ({ article }: { article: NArticle }) => {
	return (
		<Grid2 container spacing={{ xs: 0 }} size={{ xs: 3 }} direction='column' sx={{ display: "flex" }}>
			<CardMedia component='img' sx={{ borderRadius: 2 }} image={`${article?.image}`} />

			<Grid2 container direction='column' sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
				<Typography color='primary' variant='body1' sx={{ fontWeight: "bold", fontFamily: "inherit" }}>
					{Math.ceil(article?.content?.trim().split(/\s+/).length * 0.004)}
					<span> دقائق للقراءة</span>
				</Typography>
				<Typography variant='body1' color='initial' sx={{ fontFamily: "inherit" }}>
					{article?.date.substring(0, 10)}
				</Typography>
				<Link href={`/home/articles/${article.id}`} color='black' sx={{ fontFamily: "inherit", fontWeight: "bold" }} variant='subtitle1' underline='hover'>
					{article?.headline}
				</Link>
				<Typography variant='subtitle2' color='textSecondary' sx={{ fontFamily: "inherit", marginTop: 1 }}>
					{article?.content?.substring(0, 100)}...
				</Typography>
			</Grid2>
		</Grid2>
	);
};

export default ArticleMiniCard;
