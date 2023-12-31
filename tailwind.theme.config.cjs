const colors = require('tailwindcss/colors')

module.exports = {
    /**
     * Color Palette - Lime Route
     */
    acikkaynak: {
        colors: {
            primary: "#66CC33",
            secondary: colors.lime[200],
            dark: {
                primary: "#66CC33",
                secondary: colors.lime[200],
            },
            accent: {
                slate: {
                    light: colors.slate[300],
                    dark: colors.slate[500]
                },
                default: colors.blue[700]
            }
        }
    },
}
