const proxy = {
  '/api/sample': {
    target: 'http://localhost:8080',
    pathRewrite: { '/api/sample': '/' },
  },
};

module.exports = proxy;
