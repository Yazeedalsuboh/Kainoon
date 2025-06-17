import React from "react";
import ArticleMiniCard from "./ArticleMiniCard";
import { Grid2 } from "@mui/material";
import { Article, NArticle } from "@/app/types";

const NewspaperBoard = async () => {
	let payload = await fetch(`http://localhost:4000/api/narticles`, {
		cache: "no-store",
	}).then((res) => res.json().then((data) => data.payload));

	return (
		<Grid2 container spacing={{ xs: 4 }} sx={{ display: "flex" }}>
			<Grid2 container spacing={{ xs: 2 }} sx={{ display: "flex" }}>
				{payload.map((article: NArticle) => (
					<ArticleMiniCard article={article} />
				))}
			</Grid2>
		</Grid2>
	);
};

export default NewspaperBoard;
