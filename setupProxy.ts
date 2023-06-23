import { createProxyMiddleware } from 'http-proxy-middleware';
import { RequestHandler } from 'express';

const proxyOptions: RequestHandler = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
});

module.exports = function (app: any) {
  app.use('/', proxyOptions);
};
