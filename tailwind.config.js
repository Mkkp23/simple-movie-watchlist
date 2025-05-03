/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#1F1F1F', // Slightly darker background
      'card-bg': '#2A2A2A',    // Lighter shade for card backgrounds
      'primary-text': '#F0F0F0', // Slightly brighter for better readability
      'secondary-text': '#B0B0B0', // For less important text
      'accent-1': '#7FDBDA', // Adjusted teal (slightly more vibrant)
      'accent-2': '#FF9E9E', // Softer pink
      'button': '#9D7AE8', // More vibrant purple
      'button-hover': '#8A66D4', // Darker shade for hover states
      'success': '#72CC8F', // Green for success states
      'error': '#E86F6F', // Red for error states
      'border': '#3D3D3D', // Subtle borders
    },
  },
  plugins: [],
}

