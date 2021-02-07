module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/melp/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
