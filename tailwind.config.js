/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/content/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            colors: {
                primary: '#38bdf8',
                background: '#0f172a',
                surface: '#1e293b',
                text: '#f8fafc'
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: ['bg-background', 'text-text'],

};