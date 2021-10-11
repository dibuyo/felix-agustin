module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'body-background': "url('/img/background.png')",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}