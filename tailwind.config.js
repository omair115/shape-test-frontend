module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'appBackground': "#725267",
      },
      fontFamily: {
		    inter: ['Inter', 'sans-serif'],
			},
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

