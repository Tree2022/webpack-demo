const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  module: {
    // loader 加载器 配置在这儿
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // loader 执行的顺序： use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
            // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
            options: {
              limit: 8 * 1024,
            },
          },
        ],
      },

      // {
      //   // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'font-[name].[hash:6][ext]',
      //   },
      // },
      {
        // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024,
              // 配置输出的文件名
              name: '[name].[ext]',
              // 配置输出的文件目录
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
    ],
  },
  output: {
    // 出口的相关配置
    path: path.resolve(__dirname, 'dist'), // 出口的路径 绝对路径
    filename: 'bundle.js', // 输出文件的名称
  },
  plugins: [
    // 插件是字段 plugins 里配置
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'index.html', // 生成文件的名称
    }),
  ],
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
};
