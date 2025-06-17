import { TextField, Button, Grid2, MenuItem, Select, InputLabel, FormControl, FormHelperText, Typography, Box, Link } from "@mui/material";
import { signup } from "@/app/actions/actions";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

const Page = () => {
	return (
		<Grid2 container size={{ xs: 12 }} sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
			<Grid2 container spacing={{ xs: 2 }} size={{ xs: 8 }} p={4} sx={{ boxShadow: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<Grid2 container spacing={{ xs: 2 }} size={{ xs: 12 }} sx={{ flexDirection: "column", alignItems: "center" }}>
					<AppRegistrationOutlinedIcon sx={{ boxShadow: 3, padding: 2, borderRadius: 2 }} color='primary' fontSize='large' />
					<Typography variant='h5' sx={{ fontFamily: "inherit" }} color='initial'>
						إنشاء حساب{" "}
					</Typography>
				</Grid2>
				<form action={signup} style={{ width: "100%" }}>
					<Grid2 container size={{ xs: 12 }} spacing={{ xs: 4 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
						<Grid2 container size={{ xs: 6 }}>
							<TextField fullWidth label='Name' name='name' required />
							<TextField fullWidth label='Email' name='email' type='email' required />
							<TextField fullWidth label='password' name='password' type='password' required />
						</Grid2>
						<Grid2 container size={{ xs: 6 }} sx={{ display: "flex" }}>
							<Grid2 size={{ xs: 6 }} display='flex'>
								<TextField fullWidth label='Age' name='age' type='number' required />
							</Grid2>
							<Grid2 size={{ xs: 6 }} display='flex'>
								<TextField fullWidth label='Country' name='country' required />
							</Grid2>
							<Grid2 size={{ xs: 6 }} display='flex'>
								<FormControl fullWidth required>
									<InputLabel>Gender</InputLabel>
									<Select name='gender'>
										<MenuItem value='MALE'>Male</MenuItem>
										<MenuItem value='FEMALE'>Female</MenuItem>
									</Select>
									<FormHelperText>Select your gender</FormHelperText>
								</FormControl>
							</Grid2>
						</Grid2>
						<Grid2 container size={{ xs: 6 }}>
							<Button type='submit' sx={{ fontFamily: "inherit" }} size='large' variant='outlined' color='primary' fullWidth>
								إنشاء حساب
							</Button>
						</Grid2>
					</Grid2>
				</form>
				<Grid2 container size={{ xs: 6 }} sx={{ justifyContent: "center" }} spacing={{ xs: 1 }}>
					<Link href='/login' sx={{ fontFamily: "inherit", color: "primary" }} variant='h6' underline='hover'>
						تسجيل دخول{" "}
					</Link>
					<Typography sx={{ fontFamily: "inherit" }} variant='h6'>
						هل لديك حساب؟{" "}
					</Typography>
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default Page;
