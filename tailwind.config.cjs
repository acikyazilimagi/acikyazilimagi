const { fontFamily } = require("tailwindcss/defaultTheme");
const config = require("./tailwind.theme.config.cjs");
/**
 * Find the applicable theme color palette, or use the default one
 */
const themeKey = process.env.THEME_KEY ?? "acikkaynak";
const themeConfig = themeKey && config[themeKey]
  ? config[themeKey]
  : config.default;
const { colors } = themeConfig;
module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,ts}",
  ],
  safelist: ["dark"],
  theme: {
    fontFamily: {
      sans: ["Fira Code", ...fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          ...colors,
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
            blockquote: {
              color: colors.dark.secondary,
              borderColor: colors.primary,
            },
            "blockquote > p::before, p::after": {
              color: colors.primary,
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: colors.dark.primary,
              "&:hover": {
                color: colors.primary,
              },
            },
            blockquote: {
              color: colors.accent.slate.dark,
              fontSize: theme("fontSize.2xl"),
              borderColor: colors.dark.primary,
            },
            "blockquote > p::before, p::after": {
              color: colors.dark.primary,
            },
            h1: {
              color: colors.dark.primary,
            },
            h2: {
              color: colors.dark.primary,
              fontSize: theme("fontSize.2xl"),
            },
            h3: {
              color: colors.dark.primary,
              fontSize: theme("fontSize.base"),
            },
            h4: {
              color: colors.dark.primary,
              fontSize: theme("fontSize.base"),
            },
            h5: {
              color: colors.dark.primary,
              fontSize: theme("fontSize.base"),
            },
            h6: {
              color: colors.dark.primary,
              fontSize: theme("fontSize.base"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
