const siteData = require("./src/_data/site.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "src/assets/favicon.png": "favicon.png"
  });

  eleventyConfig.addFilter("absoluteUrl", (pageUrl, baseUrl) => {
    if (!baseUrl || !pageUrl) {
      return "";
    }
    return `${baseUrl.replace(/\/$/, "")}${pageUrl}`;
  });

  eleventyConfig.addCollection("sitePages", (collection) =>
    collection.getFilteredByGlob("src/content/**/*.md")
  );

  eleventyConfig.addCollection("navPages", (collection) =>
    collection
      .getFilteredByGlob("src/content/**/*.md")
      .filter((page) => page.url !== "/" && page.data.showInNav !== false)
      .sort((a, b) => {
        const orderA = a.data.navOrder ?? 999;
        const orderB = b.data.navOrder ?? 999;
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        return (a.data.title || "").localeCompare(b.data.title || "");
      })
  );

  eleventyConfig.on("eleventy.before", () => {
    if (process.env.CI === "true" && siteData.url === "") {
      console.warn("[troop181] site.url is not set in src/_data/site.json.");
    }
    if (process.env.CI === "true" && siteData.calendarId === "") {
      console.warn("[troop181] site.calendarId is not set; calendar page will show a placeholder.");
    }
  });

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
