module.exports = {
  launch: {
    headless: true,
    defaultViewport: {
      width: 1250, height: 600,
    },
  },
  server: {
    command: 'PORT=3001 yarn start',
    port: 3001,
    launchTimeout: 30000,
    // debug: true,
  },
};