const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add react-native-svg-transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Update resolver for SVG support
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts.push("svg");

// Apply NativeWind's config
module.exports = withNativeWind(config, { input: "./global.css" });
