const { i18n } = require("./next-i18next.config");

module.exports = {
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  i18n,
  experimental: {
    appDir: true,
  },
  output: "standalone",
};
