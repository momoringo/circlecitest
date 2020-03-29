module.exports = {
  launch: {
    headless: true,
    defaultViewport: {
      width: 1250, height: 600,
    },
  },
  server: {
    command: process.env.SERVER === 'false' ? 'sleep 3600' : 'PORT=3000 yarn start',
    port: 3000,
    launchTimeout: 50000,
    // debug: true,
  },
};