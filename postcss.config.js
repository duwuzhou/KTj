module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度 / 10（通常设计稿宽度为 375px）
      propList: ['*'],
    },
  },
};