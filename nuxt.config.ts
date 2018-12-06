import * as webpack from 'webpack';
export default {
  dev: process.env.NODE_ENV !== 'production',
	/*
		** Headers of the page
		*/
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'renderer', content: 'webkit' },
      { name: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'email=no', content: 'format-detection' },
      { name: 'telephone=no', content: 'format-detection' },
      { name: 'robots', content: 'all' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
	/*
	** Customize the progress bar color
	*/
  loading: { color: '#fff' },
  css: [],
  srcDir: 'app/view/nuxt/',
  buildDir: 'app/assets/.nuxt',
	/*
	** Nuxt.js modules
	*/
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
	/*
	** Axios module configuration
	*/
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
	/*
	** Build configuration
	*/
  build: {
    analyze: false,
    cssSourceMap: false,
    publicPath: '/assets/',
    vendor: [],
    plugins: [
      new webpack.ContextReplacementPlugin(
        /moment[\\\/]locale$/,
        /^\.\/(zh-cn)$/,
      ),
      new webpack.HashedModuleIdsPlugin(),
    ],
		/*
		** Run ESLint on save
		*/
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  },
  plugins: [
  ],
  router: {},
};