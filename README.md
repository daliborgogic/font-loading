# font-loading [wip]

> [Nuxt.js](https://github.com/nuxt/nuxt.js) module for [Font Loading Module Level 3](https://www.w3.org/TR/css-font-loading-3/) used for dynamically loading font resources.


Note: Font Loading Module Level 3 is still [under development in some browsers](http://caniuse.com/#feat=font-loading).

## Setup

- Add ```font-loading``` as dependency
- Add ```font-loading``` to modules section of nuxt.config.js

```javascript
{
  modules: [
    ['font-loading', {
      fontName: '',
      fontPath: ''
    }]
  ]
}
```

## API

### fontFamily

Type: ```String```

Default: ```-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif```

### fontName

Type: ```String```

### fontPath

Type: ```String```

### fontOptions.style

Type: ```String```

Default: ```normal```

### fontOptions.weight

Type: ```String```

Default: ```400```

## License

[MIT](https://opensource.org/licenses/MIT)
