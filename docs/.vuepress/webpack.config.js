module.exports = {
  chainWebpack: (config, isServer) => {
    config.resolve.alias
      .set("@vue","/study/vue")
      .set("@offer/vue","/study/offer/vue")
      .set("@ele","/electronic-commerce")
  }
}
