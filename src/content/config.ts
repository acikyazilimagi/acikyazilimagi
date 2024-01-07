import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	schema: z.object({
		title: z
			.string()
			.max(100, "Başlık alanı 100 veya daha az karakter içermelidir."),
		description: z.string(),
		tags: z.array(z.string()),
		author: z.string(),
		authorImage: z.string().optional(),
		authorTwitter: z.string(),
		date: z.string(),
		image: z.string().optional(),
		category: z.string(),
	}),
});

export const collections = {
	blog: blogCollection,
};
