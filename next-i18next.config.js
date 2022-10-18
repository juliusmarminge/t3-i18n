/** @type {import("next-i18next").UserConfig} */
module.exports = {
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
    localePath: path.resolve("./public/locales"),
  },
};
