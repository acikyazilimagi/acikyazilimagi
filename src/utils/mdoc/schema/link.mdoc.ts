import { component } from "@astrojs/markdoc/config";

// ** @type {import('@markdoc/markdoc').Schema} */
export const link = {
	render: component("./src/components/mdoc/link.astro"),
	children: ["strong", "em", "s", "code", "text", "tag"],
	attributes: {
		href: {
			type: String,
			required: true,
		},
		title: {
			type: String,
		},
		target: {
			type: String,
		},
	},
};
