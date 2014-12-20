module.exports = {
  /*options: {
    livereload: true,
  },*/
  scripts: {
    files: ['script/*.js'],
    //tasks: ['jshint', 'concat', 'uglify'],
    tasks: ['typescript', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['style/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    //files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    //tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}