/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                "vt-c-white": "#ffffff",
                "vt-c-white-soft": "#f8f8f8",
                "vt-c-white-mute": "#f2f2f2",
                "vt-c-black": " #181818",
                "vt-c-black-soft": "#222222",
                "vt-c-black-mute": "#282828",
                "vt-c-indigo": "#2c3e50",
                "vt-c-divider-light-1": "rgba(60, 60, 60, 0.29)",
                "vt-c-divider-light-2": "rgba(60, 60, 60, 0.12)",
                "vt-c-divider-dark-1": "rgba(84, 84, 84, 0.65)",
                "vt-c-divider-dark-2": " rgba(84, 84, 84, 0.48)",
                "vt-c-text-light-1": "var(--vt-c-indigo)",
                "vt-c-text-light-2": "rgba(60, 60, 60, 0.66)",
                "vt-c-text-dark-1": "var(--vt-c-white)",
                "vt-c-text-dark-2": "rgba(235, 235, 235, 0.64)",
                "vt-dark": "#15161a",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
        },
    },
    plugins: [],
};
