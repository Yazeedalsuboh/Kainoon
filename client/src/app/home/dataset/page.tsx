import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { Visibility, ThumbUp, Download } from "@mui/icons-material";
import Data from "./components/Data";

const Page = () => {
	return (
		<Container maxWidth='lg' sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
			<Box my={4} sx={{ textAlign: "center", width: "100%" }}>
				<Typography variant='h3' gutterBottom sx={{ color: "#1976d2" }}>
					مجموعة البيانات العربية لأنظمة التوصية المدفوعة بالذكاء الاصطناعي
				</Typography>

				<Typography variant='h6' sx={{ color: "#555" }}>
					تتطلب نماذج الذكاء الاصطناعي مجموعات بيانات محددة للغات معينة للعمل بفعالية، وخاصة بالنسبة للغات ذات الخصائص اللغوية الفريدة مثل اللغة العربية. يهدف مشروعنا إلى سد الفجوة في
					مجموعات البيانات العربية لأنظمة التوصية من خلال إنشاء مجموعة بيانات بناءً على التفاعلات الحقيقية للمستخدمين مع المقالات العربية.
				</Typography>

				<Box mb={4}>
					<Typography variant='h5' gutterBottom sx={{ color: "#1976d2" }}>
						أهداف المشروع
					</Typography>
					<Typography sx={{ color: "#555" }}>
						الهدف من هذا المشروع هو تطوير مجموعة بيانات موثوقة ودقيقة تحسن التوصيات المدفوعة بالذكاء الاصطناعي للمحتوى العربي. من خلال تتبع تفاعلات المستخدمين مثل المشاهدات، الأصوات،
						المشاركات، والمزيد، ستعكس هذه المجموعة اهتمامات المتحدثين بالعربية وتكون مصدرًا أساسيًا لتطوير نماذج الذكاء الاصطناعي باللغة العربية.
					</Typography>
				</Box>

				<Grid container spacing={4} mb={4} justifyContent='center'>
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
							<CardContent>
								<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
									<Visibility sx={{ verticalAlign: "middle", marginRight: 1 }} /> جمع البيانات
								</Typography>
								<Typography variant='body2' sx={{ color: "#555" }}>
									يتم جمع المقالات كل ساعتين من عدة وكالات صحفية عربية. يتم تخزين هذه المقالات في قاعدة بيانات SQL وعرضها ديناميكيًا على الموقع الإلكتروني. يتم تسجيل التفاعلات
									الملتقطة على الموقع وتخزينها لتوليد مجموعة البيانات.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
							<CardContent>
								<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
									<ThumbUp sx={{ verticalAlign: "middle", marginRight: 1 }} /> تفاعلات المستخدمين
								</Typography>
								<Typography variant='body2' sx={{ color: "#555" }}>
									نحن نتتبع ثمانية أنواع من تفاعلات المستخدمين مع المقالات: مشاهدة، نسخ، تمرير، تصويت إيجابي، تصويت سلبي، مشاركة، تعليق، وحفظ. يتم تسجيل كل تفاعل مع الطابع الزمني
									وربطه بالمقال.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
							<CardContent>
								<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
									<Download sx={{ verticalAlign: "middle", marginRight: 1 }} /> تنزيل البيانات
								</Typography>
								<Typography variant='body2' sx={{ color: "#555" }}>
									بعد جمع البيانات وتخزينها، يتم تجهيز مجموعة البيانات للتحميل وتوفيرها للمستخدمين لتطوير نماذج الذكاء الاصطناعي وتحسين أنظمة التوصية.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={5}>
						<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
							<CardContent>
								<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
									<Download sx={{ verticalAlign: "middle", marginRight: 1 }} /> تحسين الأنظمة التوصية
								</Typography>
								<Typography variant='body2' sx={{ color: "#555" }}>
									من خلال التفاعل الحقيقي للمستخدمين مع المقالات، يسعى المشروع إلى تحسين النماذج الحالية في الأنظمة التوصية المدفوعة بالذكاء الاصطناعي.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Box mb={6}>
					<Typography variant='h5' gutterBottom sx={{ color: "#1976d2" }}>
						الأعمال ذات الصلة والمراجع
					</Typography>
					<Grid container spacing={4} justifyContent='center'>
						<Grid item xs={12} md={5}>
							<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
								<CardContent>
									<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
										101 Billion Arabic Words Dataset
									</Typography>
									<Typography variant='body2' sx={{ color: "#555" }}>
										"Aloui, M., Chouikhi, H., Chaabane, G., Kchaou, H., & Dhaouadi, C. (2024). 101 Billion Arabic Words Dataset. arXiv preprint arXiv:2405.01590."
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={5}>
							<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
								<CardContent>
									<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
										ArabicaQA: Arabic Question Answering
									</Typography>
									<Typography variant='body2' sx={{ color: "#555" }}>
										"Abdallah, A., Kasem, M., Abdalla, M., Mahmoud, M., Elkasaby, M., Elbendary, Y., & Jatowt, A. (2024, July). Arabicaqa: A comprehensive dataset for Arabic
										question answering."
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={5}>
							<Card sx={{ backgroundColor: "#f5f5f5", boxShadow: 3 }}>
								<CardContent>
									<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
										OSN-MDAD: Arabic Multi-Dialect Dataset
									</Typography>
									<Typography variant='body2' sx={{ color: "#555" }}>
										"Alzamzami, F., & Saddik, A. E. (2023). OSN-MDAD: Machine Translation Dataset for Arabic Multi-Dialectal Conversations on Online Social Media."
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>

				<Box mt={6}>
					<Typography variant='h6' gutterBottom sx={{ color: "#1976d2" }}>
						معاينة مجموعة البيانات
					</Typography>
					<Data />
				</Box>
			</Box>
		</Container>
	);
};

export default Page;
