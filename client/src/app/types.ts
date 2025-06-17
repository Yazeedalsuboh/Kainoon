export type Topic = {
	id: number;
	name: string;
};

export type Article = {
	id: number;
	title: string;
	text: string;
	top_image: string;
	publish_date: string;
	createdAt: Date;
	newspaperId: number;
	topics: Array<Topic>;
};

export type NArticle = {
	headline: String;
	content: string;
	date: string;
	image: string;
	id: Number;
};

export type Newspaper = {
	id: number;
	name: string;
	arname: string;
	url: string;
	img: string;
};

export type User = {
	name?: string;
	email: string;
	password: string;
	age?: number;
	gender?: string;
	country?: string;
	job?: string;
	marital_status?: string;
	role?: string;
};
