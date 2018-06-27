module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
        rootValue: 16,
        propList: ["*"],
        selectorBlackList: ["html"],
        replace: false
    }
  }
}