"use client";
import { getUserId } from "@/app/actions/actions";
import { useState } from "react";
import { Grid2, TextField, Button, Paper } from "@mui/material";

const Comment = ({ article_id }: { article_id: number }) => {
	const [text, setText] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	const addComment = async () => {
		try {
			const userid = await getUserId();

			const response = await fetch(`http://localhost:4000/api/comments`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: userid,
					article_id,
					text,
				}),
			});

			if (response.ok) {
				window.location.reload();
			}
		} catch (error) {
			console.error("Error adding comment:", error);
		}
	};

	return (
		<Grid2 size={12} pt={2}>
			<Paper elevation={3} sx={{ padding: 2 }}>
				<TextField
					value={text}
					onChange={handleChange}
					placeholder='Write a comment...'
					variant='outlined'
					fullWidth
					multiline
					rows={2}
					sx={{
						"& .MuiOutlinedInput-root": {
							borderRadius: 2,
						},
						"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#1976d2",
						},
					}}
				/>
				<Button
					onClick={addComment}
					variant='contained'
					color='primary'
					size='large'
					sx={{
						marginTop: 1.5,
						borderRadius: 2,
						textTransform: "none",
						fontWeight: "bold",
						transition: "0.3s",
						width: "100%",
						"&:hover": {
							backgroundColor: "#1565c0",
						},
					}}
				>
					إضافة
				</Button>
			</Paper>
		</Grid2>
	);
};

export default Comment;
