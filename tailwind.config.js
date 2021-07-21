module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'nvm': "url('https://picsum.photos/id/1005/1600/1400')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
