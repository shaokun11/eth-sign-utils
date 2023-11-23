const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: ["process/browser"],
            }),
        ],
        resolve: {
            fallback: {
                url: false,
                util: false,
                https: false,
                zlib: false,
                http: false,
                process: require.resolve("process/browser"),
                stream: require.resolve("stream-browserify"),
            },
        },
    },
});
