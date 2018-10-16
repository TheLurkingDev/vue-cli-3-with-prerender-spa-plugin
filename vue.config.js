const path = require('path');
const prerenderSpaPlugin = require('prerender-spa-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new prerenderSpaPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Routes to render
                routes: [ '/', '/about' ]
            })
        ]
    }    
}