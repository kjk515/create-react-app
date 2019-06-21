const proxy = {
  '/api/depot': {
    target: 'http://localhost:8080',
    pathRewrite: { '/api/depot': '/' },
  },
};

module.exports = proxy;
