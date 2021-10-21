module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "NODE_ENV": "production",
      }
    }
  ]
}