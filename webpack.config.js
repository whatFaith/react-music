const path = require('path');
const webpack = require('webpack');

// 这在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  // 出口文件
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 开发服务器配置
  devServer: {
    host: 'localhost',
    port: 3000, // 端口号
    progress: true, // 开启加载
    open: true, // 自动打开浏览器
    compress: true, // 启动压缩
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true, // 开启热更新
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: true, // 开启history模式
    // api代理
    proxy: {
      '/api': {
        target: 'https://test-user-api.wanshifu.com/',
        changeOrigin: true,
        withCredentials: true,
        secure: false,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  // 处理对应模块
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/, // 只转换src目录下的js
        exclude: /node_modules/ // 排除node_modules，优化打包速度
      },
      {
        test: /\.css$/, // 解析css
        use: ['css-loader', 'postcss-loader'] // 从右向左解析
      },
      {
        test: /\.less$/, // 解析less
        use: ['css-loader', 'postcss-loader', 'less-loader']
      },
      // 处理css引入的背景图片
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于8k的图片自动转为base64格式，并且不会存在实体图片
              outputPath: 'images/' // 图片打包后存放的路径
            }
          }
        ]
      },
      // 处理页面引入的图片
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        }]
      }
    ]
  },
  // 优化
  optimization: {
    splitChunks: {
      cacheGroups: {
        verdor: { // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules 下的第三方包
          chunks: 'initial',
          name: 'vendor', // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        }
      }
    }
  },
  // 对应的插件
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html', // 用哪个html作为模板
      // chunks: ['vendor', 'index', 'utils'], // 引入需要的chunk
      hash: true // 会在打包和的bundle.js后面加上hash串
    })
  ],
  resolve: {
    // 别名
    alias: {
      Pages: path.join(__dirname, 'src/pages'),
      Component: path.join(__dirname, './src/components'),
      images: path.join(__dirname, 'src/assets/images')
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.json']
  },
  mode: 'development' // 模式配置
}