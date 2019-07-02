const withOffline = require('next-offline')

// const isProd = process.env.NODE_ENV === 'production'
// module.exports = {
//   // You may only need to add assetPrefix in the production.
//   assetPrefix: isProd ? '//nuxt3.me/dist' : ''
// }

module.exports = withOffline({ dontAutoRegisterSw: true })
