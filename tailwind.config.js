module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
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