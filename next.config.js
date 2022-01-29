module.exports = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  env: {
    api: process.env.PORT + 'api/',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    //   mySecret: 'secret',
    //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    apiUrl: 'api',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
  // webpack(config, options) {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^pg-native$/));
    config.node = {
      ...(config.node || {}),
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty',
    };
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]',
                esModule: false
              }
            },
            esModule: false
          }
        }
      ],
      exclude: /node_modules/
    });
    return config;
  },
};
