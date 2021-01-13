const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { isDev, PROJECT_PATH, IS_OPEN_HARD_SOURCE } = require('../constants');

const getCssLoaders = importLoaders => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: isDev,
      // * 指定在 css-loader 前应用的 loader 的数量。
      importLoaders
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        // * 修复一些和 flex 布局相关的 bug.
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            grid: true,
            flexbox: 'no-2009'
          },
          stage: 3
        }),
        // * 从 browserlist 中按需使用 normalize.css 中的样式。
        require('postcss-normalize')
      ],
      sourceMap: isDev
    }
  }
];

module.exports = {
  devServer: {
    // * 避免 URL 改变刷新后 404.
    historyApiFallback: true
  },
  entry: {
    app: resolve(PROJECT_PATH, './src/index.tsx')
  },
  output: {
    // * 修改出口文件名，去掉缓存造成的 Bug，该功能在 dev 下不需要。
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
    publicPath: '/'
  },
  resolve: {
    // * 配置后引入模块时，不需要加入后缀。
    extensions: ['.tsx', '.ts', '.js', '.json'],
    // * 文件别名配置，需同步 tsconfig.json 中的映射路径配置。
    alias: {
      Src: resolve(PROJECT_PATH, './src'),
      Routes: resolve(PROJECT_PATH, './src/routes'),
      Layouts: resolve(PROJECT_PATH, './src/layouts'),
      Pages: resolve(PROJECT_PATH, './src/pages'),
      Components: resolve(PROJECT_PATH, './src/components'),
      Utils: resolve(PROJECT_PATH, './src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        // * 开启公共文件缓存，加快二次编译速度。
        options: { cacheDirectory: true },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [...getCssLoaders(0)],
        // * 避开对 antd 的处理，下面会做单独处理。
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          }
        ],
        exclude: /src/
      },
      // * 单独处理 antd 样式。
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              // * 当大于限制，打包正常图片，小于限制，打包为 Base64 插入到文件中；可以有效减少 Http 请求。
              limit: 10 * 1024,
              // * 表示输出的文件名为"原来的文件名.哈希值.后缀"，有了这个 hash 值，可防止图片更换后导致的缓存问题
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      // ! 防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      cache: false,
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true
          }
    }),
    // * 打包后将 public 文件夹下的静态资源拷贝到 dist 目录下。
    new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './public'),
          from: '*',
          to: resolve(PROJECT_PATH, './dist'),
          toType: 'dir'
        }
      ]
    }),
    // * 控制台显示编译/打包进度。
    new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#fa8c16'
    }),
    // ! 避免 babel 暴力编译 ts 可能会造成的 Bug。
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(PROJECT_PATH, './tsconfig.json')
      }
    }),
    // * 大大提高二次编译速度。
    IS_OPEN_HARD_SOURCE && new HardSourceWebpackPlugin(),
    !isDev &&
      // * css 样式拆分，抽离公共代码。
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
        ignoreOrder: false
      })
  ].filter(Boolean),
  // ! 剥离一些依赖，采用 CDN 的形式进行加载；需同步在入口文件 public/index.html 中进行 CDN 的引入。
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      !isDev &&
        new TerserPlugin({
          // * 去除注释。
          extractComments: false,
          // * 去除 console。
          terserOptions: {
            compress: { pure_funcs: ['console.log'] }
          }
        }),
      // * 压缩 css 代码。
      !isDev && new OptimizeCssAssetsPlugin()
    ].filter(Boolean),
    splitChunks: {
      chunks: 'all',
      name: true
    }
  }
};
