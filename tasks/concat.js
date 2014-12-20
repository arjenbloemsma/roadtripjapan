module.exports = {
  scriptCritcal: {
    src: [
      'script/libs/*.js',
      'script/*.js'
    ],
    dest: '<%= dirs.output %>/script/app.js'
  },
  styleCritical: {
    src: [
      '<%= dirs.temp %>/style/*.css'
    ],
    dest: '<%= dirs.output %>/style/global.css'
  },
  scriptNonCritcal: {
    /*
    src: [
      'script/libs/*.js',
      'script/*.js'
    ],
    dest: '<%= dirs.output %>/script/app.js'
    */
  },
  styleNonCritical: {
    /*
    src: [
      '<%= dirs.temp %>/style/*.css'
    ],
    dest: '<%= dirs.output %>/style/global.css'
    */
  }
}