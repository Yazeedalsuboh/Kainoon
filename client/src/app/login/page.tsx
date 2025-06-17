import { TextField, Button, Grid2, Typography, Link, Box } from "@mui/material";
import { login } from "@/app/actions/actions";
import LoginIcon from "@mui/icons-material/Login";

const Page = () => {
	return (
		<Grid2 container size={{ xs: 12 }} sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
			<Grid2 container size={{ xs: 8 }} p={4} spacing={{ xs: 2 }} sx={{ boxShadow: 3, flexDirection: "column", alignItems: "center", backgroundColor: "#fff", borderRadius: 2 }}>
				<Grid2 container spacing={{ xs: 2 }} size={{ xs: 12 }} sx={{ flexDirection: "column", alignItems: "center" }}>
					<LoginIcon sx={{ boxShadow: 3, padding: 2, borderRadius: 2 }} color='primary' fontSize='large' />
					<Typography variant='h5' sx={{ fontFamily: "inherit" }} color='initial'>
						تسجيل دخول
					</Typography>
				</Grid2>
				<form style={{ width: "100%" }} action={login}>
					<Grid2 container size={{ xs: 12 }} spacing={{ xs: 4 }} sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
						<Grid2 container size={{ xs: 6 }}>
							<TextField fullWidth label='Email' name='email' type='email' required />
							<TextField fullWidth label='password' name='password' type='password' required />
						</Grid2>
						<Grid2 container size={{ xs: 6 }}>
							<Button type='submit' sx={{ fontFamily: "inherit" }} variant='outlined' color='primary' size='large' fullWidth>
								تسجيل دخول
							</Button>
						</Grid2>
					</Grid2>
				</form>
				<Grid2 container size={{ xs: 6 }} sx={{ justifyContent: "center" }} spacing={{ xs: 1 }}>
					<Link href='/signup' sx={{ fontFamily: "inherit", color: "primary" }} variant='h6' underline='hover'>
						إنشاء حساب
					</Link>
					<Typography sx={{ fontFamily: "inherit" }} variant='h6'>
						ليس لديك حساب؟
					</Typography>
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default Page;
