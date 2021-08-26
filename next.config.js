const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  images: {
    domain: ['theysaidso.com'],
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
