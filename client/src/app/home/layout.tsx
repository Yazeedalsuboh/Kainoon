import type { Metadata } from "next";
import Header from "./components/main/Header";
import { Grid2 } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Kainoon",
	description: "All for all",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (!(await cookies()).get("user")?.value) {
		redirect("/");
	}
	return (
		<Grid2 container spacing={2} sx={{ direction: "rtl" }}>
			<Header />
			{children}
		</Grid2>
	);
}
