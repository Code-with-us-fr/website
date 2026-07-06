/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                // Définit Poppins comme police sans-serif par défaut
                sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Enregistrement de votre vraie couleur d'identité
                'esn-blue': '#374d9d',
                // Optionnel : une version un peu plus sombre pour les effets de survol (hover)
                'esn-blue-dark': '#2c3d7d',
            }
        },
    },
    plugins: [],
}