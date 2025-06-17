import React from "react";
import { Grid2, Divider, Link, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "@/app/actions/actions";

const Header = () => {
	return (
		<Grid2 container size={{ xs: 12 }} sx={{ display: "flex" }} fontFamily='inherit'>
			<Grid2 container columnSpacing={{ xs: 2 }} size={{ xs: 8 }} sx={{ display: "flex", alignItems: "center" }}>
				<Link href='/home' color='primary' variant='h5' fontWeight='bold' underline='none' fontFamily='inherit'>
					أخبار كينون
				</Link>
				<Divider orientation='vertical' variant='fullWidth' sx={{ backgroundColor: "black" }} flexItem />
				<Link href='/home' color='initial' variant='body1' underline='hover' fontFamily='inherit'>
					الرئيسية
				</Link>

				<Link href='/home/likes' color='initial' variant='body1' underline='hover' fontFamily='inherit'>
					إعجابات
				</Link>
				<Link href='/home/archives' color='initial' variant='body1' underline='hover' fontFamily='inherit'>
					إرشيف
				</Link>
				<Link href='/home/dataset' color='initial' variant='body1' underline='hover' fontFamily='inherit'>
					قاعدة البيانات
				</Link>
			</Grid2>
			<Grid2 size={{ xs: 4 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
				<form action={logout}>
					<Button type='submit' variant='outlined' color='primary' endIcon={<LogoutIcon sx={{ mr: 1 }} />} sx={{ fontFamily: "inherit" }}>
						تسجيل خروج
					</Button>
				</form>
			</Grid2>
		</Grid2>
	);
};

export default Header;
