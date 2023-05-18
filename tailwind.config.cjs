/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                scroller: {
                    "0%, 100%": {
                        transform: "translateY(-155%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            animation: {
                scroller: "scroller 1s infinite",
            },
        },
        fontFamily: {
            sans: ["IBM Plex Mono", "monospace"],
            monospace: ["JetBrains Mono", "monospace"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
