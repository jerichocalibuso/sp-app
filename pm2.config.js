module.exports = {
  apps: [
    {
      name: 'TW',
      script: 'npm run dev:css',
      ignore_watch: ['.'],
      env: { NODE_ENV: 'development' },
    },
    {
      name: 'R',
      script: 'npm run dev:app',
      ignore_watch: ['.'],
      env: { NODE_ENV: 'development' },
    },
  ],
}
