module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@': '.',
              // or if your assets are in the root:
              // '@': '.',
            },
          },
        ],
      ],
    };
  };