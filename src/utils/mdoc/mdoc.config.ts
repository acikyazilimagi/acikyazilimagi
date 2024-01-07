import { callout } from "./schema/callout.mdoc";
import { link } from "./schema/link.mdoc";
import { tweetEmbed } from "./schema/tweet-embed.mdoc";
import { tabs } from "./schema/tabs.mdoc";
import { ytEmbed } from "./schema/yt-embed.mdoc";

// ** @type {import('@markdoc/markdoc').Config} */
export const config = {
	tags: {
		callout,
		link,
		tweet: tweetEmbed,
		yt: ytEmbed,
		tabs,
	},
	functions: {
		getCountryEmoji: {
			transform(parameters: ArrayLike<string>) {
				const [country] = Object.values<string>(parameters);
				const countryToEmojiMap: Record<string, string> = {
					turkey: "🇹🇷",
				};

				return countryToEmojiMap[country] ?? "🏳";
			},
		},
	},
};
