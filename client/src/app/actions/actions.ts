"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { User } from "../types";

export async function incrementShared(id: number) {
	try {
		await fetch(`http://localhost:4000/api/analytics/interaction/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ interaction: "shares" }),
		});
	} catch (error) {
		console.error("Error incrementing share:", error);
	}
}

export async function signup(formData: any) {
	const user: User = {
		name: formData.get("name"),
		email: formData.get("email"),
		password: formData.get("password"),
		age: Number(formData.get("age")),
		gender: formData.get("gender"),
		country: formData.get("country"),
	};
	console.log(user);

	const response = await fetch("http://localhost:4000/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	const result = await response.json();

	if (response.ok) {
		console.log("Account created successfully!");
		redirect("/login");
	} else {
		console.log(result.error);
		console.log(result.error || "Signup failed. Please try again.");
	}
}

export async function login(formData: any) {
	const user: User = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const response = await fetch("http://localhost:4000/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	const result = await response.json();

	if (response.ok) {
		(await cookies()).set({
			name: "user",
			value: JSON.stringify(result),
			httpOnly: true,
			path: "/",
			expires: Date.now() + 60 * 60 * 1000,
		});
		redirect("/home");
	} else {
		console.log(result.error || "Signup failed. Please try again.");
	}
}

export async function getSession() {
	const session = (await cookies()).get("user")?.value;
	if (session) redirect("/home");
	else {
		redirect("/");
	}
}

// :(
export const getUserEmail = async (): Promise<string | null> => {
	const userCookie = (await cookies()).get("user")?.value;

	if (userCookie) {
		try {
			const user = JSON.parse(userCookie);
			return user.email || null;
		} catch (error) {
			console.error("Failed to parse user cookie:", error);
			return null;
		}
	}

	return null;
};

// :)
export const getUserId = async (): Promise<string | null> => {
	const userCookie = (await cookies()).get("user")?.value;

	if (userCookie) {
		try {
			const user = JSON.parse(userCookie);
			return user.user || null;
		} catch (error) {
			console.error("Failed to parse user cookie:", error);
			return null;
		}
	}

	return null;
};

export const getUserRole = async (): Promise<string | null> => {
	const userCookie = (await cookies()).get("user")?.value;

	if (userCookie) {
		try {
			const user = JSON.parse(userCookie);
			return user.role || null;
		} catch (error) {
			console.error("Failed to parse user cookie:", error);
			return null;
		}
	}

	return null;
};
export async function logout() {
	(await cookies()).delete("user");
	redirect("/login");
}
