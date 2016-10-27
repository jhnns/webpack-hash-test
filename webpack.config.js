module.exports = {
    entry: require.resolve("./a.js"),
    output: {
        filename: "bundle.[chunkhash].js"
    }
};
