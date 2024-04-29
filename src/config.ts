import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "Giriş",
	},
	processes: {
		path: "/processes",
		title: "İşleyiş",
	},
	projects: {
		path: "/projects",
		title: "Projeler",
	},
	articles: {
		path: "/articles",
		title: "Yazılar",
	},
	press: {
		path: "/press",
		title: "Basında Biz",
	},
	about: {
		path: "/about",
		title: "Hakkımızda",
	},
};

export const SITE = {
	// Your site's detail?
	name: "Açık Yazılım Ağı",
	title: "AYA | Açık Yazılım Ağı",
	description: "Gönüllü geliştirilen yazılımlarla oluşan bir yazılım vakfı",
	url: "https://acikyazilimagi.com",
	githubUrl: "https://github.com/acikyazilimagi/acikyazilimagi",
	image: "https://acikyazilimagi.com/assets/logo.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
