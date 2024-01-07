import { component } from "@astrojs/markdoc/config";

// ** @type {import('@markdoc/markdoc').Schema} */
export const ytEmbed = {
	render: component("./src/components/mdoc/yt-video-embed.astro"),
	attributes: {
		url: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
