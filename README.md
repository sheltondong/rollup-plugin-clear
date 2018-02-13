# rollup-plugin-clear
Rollup clear plugin
### Installation
```shell
npm install --save-dev rollup-plugin-clear
```
### Usage
```javascript
// rollup.config.js
import clear from 'rollup-plugin-clear'

const config = {
    // ...
    plugins: [
        // ...
        clear({
            // required, point out which directories should be clear.
            targets: ['some directory'],
            // optional, whether clear the directores when rollup recompile on --watch mode.
            watch: false, // default: true
        })
    ]
}

export default config;
```
This plugin would auto clear the specific directories every time the rollup bundle your resource.