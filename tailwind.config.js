/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'class',
  theme: {
	fontFamily: {
		'headings': ['Montserrat', '"Open Sans"'],
		'body': ['"Open Sans"'],
		'mono': ['"Noto Sans Mono"', 'ui-monospace']
	},
    // colors: {
    //   primary: '#facc15',
    //   secondary: '#9333ea',
    //   neutral: '#4b5563',
    // },
    extend: {},
  },
  plugins: [],
};
