"use client";

import React, { useEffect, useState } from "react";
import { Grid2, CircularProgress, Typography } from "@mui/material";
import ArticleMiniCard from "../components/articleCards/ArticleMiniCard";
import { getUserId } from "@/app/actions/actions"; // Assuming getUserId is in utils/auth
import { Article } from "@/app/types";

const Page = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchLikedArticles = async () => {
			setLoading(true);
			setError("");

			try {
				const userId = await getUserId();
				if (!userId) {
					setError("User not found. Please log in.");
					setLoading(false);
					return;
				}

				const response = await fetch(`http://localhost:4000/api/likes/${userId}`);
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || "Failed to fetch liked articles.");
				}

				console.log(data);

				setArticles(data.payload || []);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchLikedArticles();
	}, []);

	if (loading) return <CircularProgress />;
	if (error) return <Typography color='error'>{error}</Typography>;

	return (
		<Grid2 container spacing={{ xs: 2 }}>
			<Grid2>
				<Typography variant='h3' sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
					الاعجابات
				</Typography>
			</Grid2>
			<Grid2 container spacing={{ xs: 2 }} sx={{ display: "flex" }}>
				{articles.length > 0 ? articles.map((article: Article) => <ArticleMiniCard key={article.id} article={article} />) : <Typography>No liked articles found.</Typography>}
			</Grid2>
		</Grid2>
	);
};

export default Page;
