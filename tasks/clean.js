module.exports = {
  options: {
    'no-write': false //true for testing, false for real deletion
  },
  build: {
    src: ["<%= dirs.output %>", "<%= dirs.temp %>/"]
  }
}