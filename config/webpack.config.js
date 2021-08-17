const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;


module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: "static/js/main.[hash].chunk.js",
    publicPath:"/"
  },
  // 配置各种loade
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/.vue$/],
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|eot|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'static/media',
            },
          },
        ],
      }
    ]
  },
  // 文件引用不需要后缀名
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // 本地开发服务
  devServer: {
    host: "0.0.0.0",//允许ip访问
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    port: 9050,
    compress: true,
    open: false, // 打开浏览器，默认false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.[hash].chunk.css"
    }),
    new WebpackBar(),
    // new CopyWebpackPlugin({
    //   // patterns: [
    //   //   {
    //   //     from: "public",
    //   //     filter: async (resourcePath) => {
    //   //       console.log(resourcePath,'resourcePath')
    //   //       // 排除index.html
    //   //       // if (resourcePath.includes('public/index.html')) {
    //   //       //   return false;
    //   //       // }
    //   //       // if (resourcePath.includes('public/index.pro.html')) {
    //   //       //   return false;
    //   //       // }
    //   //       return true;
    //   //     },
    //   //   }],
    // }),
  ],
  devtool: "source-map",
  mode: "development"
}
