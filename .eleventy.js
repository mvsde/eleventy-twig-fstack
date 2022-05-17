const pluginFstack = require('@factorial/eleventy-plugin-fstack')
const pluginTwig = require('@factorial/eleventy-plugin-twig')

const DIRECTORIES = {
  input: 'content',
  output: 'dist',
  layouts: '../src/layouts'
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginFstack, DIRECTORIES)
  eleventyConfig.addPlugin(pluginTwig)
  eleventyConfig.addWatchTarget('./src/**/*.{css,js,twig}')

  return {
    dir: DIRECTORIES,
    markdownTemplateEngine: 'twig'
  }
}
