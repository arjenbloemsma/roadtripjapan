module.exports = {
  options: {
    banner: '/*! <%= info.banner %> */'
  },
  combine: {
    expand: true,
    cwd: '<%= dirs.output %>/style/',
    src: ['*.css', '!*.min.css'],
    dest: '<%= dirs.output %>/style/',
    ext: '.min.css'
  }
}