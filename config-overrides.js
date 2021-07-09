// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')


module.exports = function override(config) {
    // configure resolve
    if (!config.resolve) {
        config.resolve = {}
    }

    config.resolve = {
        ...config.resolve,
        ...{alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@consts': path.resolve(__dirname, 'src/consts'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@config': path.resolve(__dirname, 'src/config')
        }}
        }
    return config
}
