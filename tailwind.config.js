    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./*.{html,js}"],
        theme: {
            extend: {
                colors: {
                    'brand': {
                        DEFAULT: '#ff6b6b',
                        // Adicione suas cores personalizadas
                    }
                }
            }
        },
        plugins: [],
    }
