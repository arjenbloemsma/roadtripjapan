module.exports = {
  options: {
    banner: '/*! <%= info.banner %> */\n'
  },
  build: {
    src: '<%= dirs.output %>/script/app.js',
    dest: '<%= dirs.output %>/script/app.min.js'
  }
}