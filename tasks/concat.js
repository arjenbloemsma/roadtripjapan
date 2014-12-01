module.exports = {
  dist: {
    src: [
      'script/libs/*.js',
      'script/*.js'
    ],
    dest: '<%= dirs.output %>/script/app.js'
  }
}