const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // 出口的相关配置
    path: path.resolve(__dirname, 'dist'), // 出口的路径 绝对路径
    filename: 'bundle.js', // 输出文件的名称
  },
};
