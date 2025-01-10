const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // 允许所有IP访问
    port: 8080, // 端口号
    https: false, // 是否启用https
    hot: true, // 启用热更新
    open: false, // 是否自动打开浏览器
    allowedHosts: 'all', // 允许所有主机访问
  },
});