import React from "react";
import { Grid2, Divider, Link, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

const Header = () => {
	return (
		<Grid2 container size={{ xs: 12 }} sx={{ display: "flex" }} fontFamily='inherit'>
			<Grid2 container columnSpacing={{ xs: 2 }} size={{ xs: 8 }} sx={{ display: "flex", alignItems: "center" }}>
				<Link href='/home' color='primary' variant='h5' fontWeight='bold' underline='none' fontFamily='inherit'>
					أخبار كينون
				</Link>
				<Divider orientation='vertical' variant='fullWidth' sx={{ backgroundColor: "black" }} flexItem />
			</Grid2>
			<Grid2 container size={{ xs: 4 }} spacing={{ xs: 2 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Button href='/login' variant='outlined' color='primary' endIcon={<LoginIcon sx={{ mr: 1 }} />} sx={{ fontFamily: "inherit" }}>
					تسجيل دخول
				</Button>
				<Button href='/signup' variant='outlined' color='primary' endIcon={<AppRegistrationOutlinedIcon sx={{ mr: 1 }} />} sx={{ fontFamily: "inherit" }}>
					إنشاء حساب
				</Button>
			</Grid2>
		</Grid2>
	);
};

export default Header;
