const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
      plugin(({addUtilities}) => {
          addUtilities({
              'text-body': 'text-black text-sm leading-21px',
              'my-utilities': {
                display: 'inline-block',
                'background-color': '#edf2f7',
                'background-color': 'rgba(237, 242, 247, var(--bg-opacity))',
              },
              btn: `px-4 py-1 rounded-full bg-red-800 text-white`,
              'body-text': `font-serif leading-relaxed tracking-wide text-gray-800`,
          });
      }),
  ],
};
