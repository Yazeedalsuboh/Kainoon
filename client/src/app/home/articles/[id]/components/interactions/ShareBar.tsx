"use client";

import React from "react";
import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsApp from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import { getUserEmail } from "@/app/actions/actions";

const ShareBar = ({ article_id }: { article_id: number }) => {
	const updateShare = async () => {
		try {
			const email = await getUserEmail();

			const response = await fetch(`http://localhost:4000/api/shares`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, article_id }),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error("Error updating shares:", error);
		}
	};

	return (
		<>
			<IconButton
				component='a'
				href='https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check out this awesome website!'
				onClick={() => updateShare()}
				target='_blank'
				color='primary'
			>
				<XIcon sx={{ color: "initial" }} />
			</IconButton>
			<IconButton component='a' href='https://www.facebook.com/sharer/sharer.php?u=https://google.com' onClick={() => updateShare()} target='_blank' color='primary'>
				<FacebookIcon />
			</IconButton>
			<IconButton component='a' href='https://api.whatsapp.com/send?text=Check out this awesome website! https://yourwebsite.com' onClick={() => updateShare()} target='_blank' color='primary'>
				<WhatsApp sx={{ color: "#25D366	" }} />
			</IconButton>
			<IconButton onClick={() => updateShare()} color='primary'>
				<ShareIcon sx={{ color: "initial" }} />
			</IconButton>
		</>
	);
};

export default ShareBar;
