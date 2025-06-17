"use client";

import React from "react";
import { IconButton } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const Data = () => {
	const getData = async () => {
		try {
			// Fetch data from the controller's dataset endpoint
			const response = await fetch(`http://localhost:4000/api/analytics/dataset`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			const interactions = data.allInteractions || [];

			// Prepare CSV content
			const keys = ["timestamp", "user_id", "country", "eventType", "article_id", "headline", "content"];
			const strKeys = keys.join(", ");

			const csvContent =
				`${strKeys}\n` +
				interactions
					.map((interaction: any) => {
						const values = [
							interaction.timestamp,
							interaction.user_id || interaction.userId,
							interaction.country,
							interaction.eventType,
							interaction.NArticle.id,
							interaction.NArticle.headline,
							interaction.NArticle.content,
						];
						return `"${values.join('","')}"`; // Wrap each value in quotes to ensure proper encoding
					})
					.join("\n");

			// Use TextEncoder for explicit UTF-8 encoding
			const encoder = new TextEncoder();
			const encodedContent = encoder.encode("\uFEFF" + csvContent); // Encode the CSV content as UTF-8

			// Create Blob with UTF-8 encoding
			const blob = new Blob([encodedContent], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "interactions.csv");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<IconButton onClick={() => getData()} color='secondary'>
			<QueryStatsIcon />
		</IconButton>
	);
};

export default Data;
