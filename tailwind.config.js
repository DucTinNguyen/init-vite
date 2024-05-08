/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'fill-top': 'linear-gradient(180deg, #30015F 23.11%, #E169FF 100%)',
        nft: ' linear-gradient(180deg, #9D2ABE 0%, #210E2E 100%)',
        clan_dance: 'linear-gradient(180deg, #674932 0%, rgba(104, 73, 49, 0.00) 100%)',
        overlay_roadmap:
          'linear-gradient(180deg, rgba(255, 255, 219, 0.00) 0%, #FFFFD1 50%, rgba(255, 255, 224, 0.00) 100%)'
      }
    }
  },
  plugins: []
}
