module.exports = {
  chainWebpack: (config, isServer) => {
    config.resolve.alias
      .set("@vue","/study/vue")
      .set("@ele","/electronic-commerce")
  }
}
