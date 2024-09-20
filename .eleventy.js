module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPassthroughCopy("css");
};
