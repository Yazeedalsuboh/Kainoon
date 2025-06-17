"use client";

import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { getUserEmail } from "@/app/actions/actions";

const Archive = ({ article_id, archives }: { article_id: number; archives: number }) => {
	const [archived, setArchived] = useState(false);

	const [Narchives, setNarchives] = useState(archives);
	const checkIfArchived = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/archives/archived`, {
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
				setArchived(data.archived);
			}
		} catch (error) {
			console.error("Error checking archive status:", error);
		}
	};

	useEffect(() => {
		checkIfArchived();
	}, [article_id]);

	const updateLike = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/archives`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, article_id }),
			});

			if (response.ok) {
				setArchived(true);
				setNarchives((prev) => prev + 1); // Update the archive count after adding
			} else {
				throw new Error("Failed to add archive");
			}
		} catch (error) {
			console.error("Error adding archive:", error);
		}
	};

	const removeLike = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/archives`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, article_id }),
			});

			if (response.ok) {
				setArchived(false);
				setNarchives((prev) => prev - 1); // Update the archive count after removal
			} else {
				throw new Error("Failed to remove archive");
			}
		} catch (error) {
			console.error("Error removing archive:", error);
		}
	};

	return (
		<Box display='flex' alignItems='center' flexDirection='column'>
			<IconButton onClick={() => (archived ? removeLike() : updateLike())} color='primary' sx={{ padding: 0 }}>
				{archived ? <BookmarkIcon sx={{ color: "primary" }} /> : <BookmarkBorderIcon sx={{ color: "initial" }} />}
			</IconButton>
			<Typography variant='body2' sx={{ marginTop: 0 }}>
				{Narchives}
			</Typography>
		</Box>
	);
};

export default Archive;
