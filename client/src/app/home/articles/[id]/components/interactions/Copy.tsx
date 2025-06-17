"use client";
import { useEffect } from "react";
import { getUserEmail } from "@/app/actions/actions";

const Copy = ({ article_id }: { article_id: number }) => {
	useEffect(() => {
		const handleCopy = async () => {
			const email = await getUserEmail();
			let copiedText = "";

			try {
				copiedText = await navigator.clipboard.readText();
			} catch (error) {
				console.error("Failed to read clipboard contents:", error);
			}

			await fetch(`http://localhost:4000/api/copies`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					article_id,
					email,
					text: copiedText,
				}),
			});
		};

		document.addEventListener("copy", handleCopy);

		return () => {
			document.removeEventListener("copy", handleCopy);
		};
	}, [article_id]);

	return <></>;
};

export default Copy;
