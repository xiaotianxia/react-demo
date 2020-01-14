const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': resolve('src'),
        '@components': resolve('src/pages/components'),
        '@utils': resolve('src/utils'),
        '@style': resolve('src/style'),
        '@api': resolve('src/request/api'),
    }
    return config;
}