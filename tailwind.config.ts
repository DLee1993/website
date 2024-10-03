import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Lora: "var(--font-Lora)",
            },
            fontSize: {
                heading: "var(--fs-heading)",
                subHeading: "var(--fs-subHeading)",
                subText: "var(--fs-subText)",
            },
        },
    },
    plugins: [],
};
export default config;
