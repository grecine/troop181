module.exports = function(eleventyConfig) {
  // Passthrough for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addCollection("sitePages", (collection) =>
    collection.getFilteredByGlob("src/content/**/*.md")
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
