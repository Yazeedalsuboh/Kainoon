"use client";
import { getUserEmail } from "@/app/actions/actions";
import { useEffect } from "react";

const Click = ({ article_id }: { article_id: number }) => {
	useEffect(() => {
		const updateClicks = async () => {
			try {
				const email = await getUserEmail();

				const response = await fetch(`http://localhost:4000/api/clicks`, {
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
				console.error("Error updating clicks:", error);
			}
		};

		updateClicks();
	}, []);

	return <></>;
};

export default Click;
