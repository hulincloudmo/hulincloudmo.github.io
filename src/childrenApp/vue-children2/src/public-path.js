/**
 * @author 陌上青夏
 * @创建时间 2020/10/12 5:58 下午
 */
(function() {
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-undef
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}/`;
      return;
    }
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
})();
