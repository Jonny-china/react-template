/* config-overrides.js */

const rewireImport = require('react-app-rewire-import')
const rewireAliases = require('react-app-rewire-aliases')
const { paths, getLoader } = require('react-app-rewired')
const path = require('path')
const autoprefixer = require('autoprefixer')

const theme = require('./package.json').theme

const fileLoaderMatcher = function(rule) {
  return rule.loader && rule.loader.indexOf(`file-loader`) !== -1
}

module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    components: path.resolve(__dirname, `${paths.appSrc}/components/`),
    utils: path.resolve(__dirname, `${paths.appSrc}/utils/`),
    api: path.resolve(__dirname, `${paths.appSrc}/api/`),
    store: path.resolve(__dirname, `${paths.appSrc}/store/`)
  })(config, env)

  config = rewireImport(config, env, {
    libraryName: 'antd-mobile',
    style: true
  })

  config.module.rules[2].oneOf.unshift({
    test: /\.less$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      },
      {
        loader: require.resolve('less-loader'),
        options: {
          // theme vars, also can use theme.js instead of this.
          modifyVars: theme
        }
      }
    ]
  })

  // css-modules
  config.module.rules[2].oneOf.unshift({
    test: /\.css$/,
    exclude: /node_modules|antd-mobile\.css/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  })

  config.module.rules[2].oneOf.unshift({
    test: /\.scss$/,
    use: [
      { loader: require.resolve('style-loader') },
      { loader: require.resolve('css-loader') },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      },
      require.resolve('sass-loader'),
      {
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: './src/assets/style/index.scss'
        }
      }
    ]
  })

  // file-loader exclude
  let l = getLoader(config.module.rules, fileLoaderMatcher)
  l.exclude.push(/\.less$/)

  require('react-app-rewire-postcss')(config, true /* any truthy value will do */)

  return config
}
