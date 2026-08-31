function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = {
  layout: "layouts/base.njk",
  showInNav: true,
  navOrder: 999,
  eleventyComputed: {
    title: (data) => data.title || titleFromSlug(data.page.fileSlug)
  },
  permalink: (data) => {
    const path = data.page.filePathStem.replace(/^\/content/, "");
    return path === "/index" ? "/" : `${path}/`;
  }
};
