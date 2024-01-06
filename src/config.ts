import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "Giriş",
	},
	processes: {
		path: "/processes",
		title: "Nasıl Çalışıyoruz?",
	},
	projects: {
		path: "/projects",
		title: "Projelerimiz",
	},
	blog: {
		path: "/blog",
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
	image:
		"https://acikyazilimagi.com/assets/logo.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "",
	// Optional, user/author settings (example)
	// Author: name
	author: "", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "", // Example: FredKSchott
	// Author: Image external source
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */
