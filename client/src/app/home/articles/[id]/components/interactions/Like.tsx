"use client";

import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getUserEmail } from "@/app/actions/actions";

const Like = ({ article_id, likes }: { article_id: number; likes: number }) => {
	const [liked, setLiked] = useState(false);
	const [Nlikes, setNlikes] = useState(likes);

	const checkIfLiked = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/likes/liked`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					article_id,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				setLiked(data.liked); // Set liked state based on the response
			}
		} catch (error) {
			console.error("Error checking like status:", error);
		}
	};

	useEffect(() => {
		checkIfLiked();
	}, [article_id]);

	const updateLike = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/likes`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, article_id }),
			});

			if (response.ok) {
				setLiked(true);
				setNlikes((prev) => prev + 1);
			} else {
				throw new Error("Failed to add like");
			}
		} catch (error) {
			console.error("Error adding like:", error);
		}
	};

	const removeLike = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/likes`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, article_id }),
			});

			if (response.ok) {
				setLiked(false);
				setNlikes((prev) => prev - 1);
			} else {
				throw new Error("Failed to remove like");
			}
		} catch (error) {
			console.error("Error removing like:", error);
		}
	};

	return (
		<>
			<Box display='flex' alignItems='center' flexDirection='column'>
				<IconButton onClick={() => (liked ? removeLike() : updateLike())} color='primary' sx={{ padding: 0 }}>
					{liked ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteBorderIcon sx={{ color: "initial" }} />}
				</IconButton>
				<Typography variant='body2' sx={{ marginTop: 0 }}>
					{Nlikes}
				</Typography>
			</Box>
		</>
	);
};

export default Like;
