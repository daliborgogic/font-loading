# font-loading [wip]

> [Nuxt.js](https://github.com/nuxt/nuxt.js) module for [Font Loading API](https://www.w3.org/TR/css-font-loading/). This API provides a scripting interface to define and manipulate CSS font faces, track their download progress, and override their default lazyload behavior. For example, if you're sure that a particular font variant is required, you can define it and tell the browser to initiate an immediate fetch of the font resource.


Note: The Font Loading API is still [under development in some browsers](http://caniuse.com/#feat=font-loading).

Proper caching is a must.

If your web application uses a [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/), serving font resources with a [cache-first strategy](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-then-network) is appropriate for most use cases.

## Setup


- Add ```font-loading``` as dependency
- Add ```font-loading``` to modules section of nuxt.config.js

```javascript
{
  modules: [
    ['font-loading']
  ]
}
```

## Options

## License

[MIT](https://opensource.org/licenses/MIT)
