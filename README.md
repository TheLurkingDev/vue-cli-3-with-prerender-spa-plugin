# vue-spa-prerender

## Configuration Notes For Setting Up Prerendering

* Install prerender-spa-plugin
  
```
npm install prerender-spa-plugin
```

* Add `vue.config.js` to project root

```
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
```

* Run a build

```
npm run build
```

* Serve from `dist` directory and view page source of each page specified by route to verify prerendering

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
