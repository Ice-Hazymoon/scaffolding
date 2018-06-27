module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-pxtorem": {
            "rootValue": 16,
            "minPixelValue": 2,
            "replace": false,
            "propList": ["*"]
        }
    }
}