module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-react-compiler", // must run first!
      [
        "react-native-unistyles/plugin",
        {
          root: "app",
        },
      ],
    ],
  };
};
