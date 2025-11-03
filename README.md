# How to use ConfigCat with Redis

**Read the blog post here](https://configcat.com/blog/how-to-use-configcat-with-redis)**

A sample Node.js app demonstrating to integrate ConfigCat with a Redis cache. This is done by setting the `cache` property in the options passed to `getClient`.

## Build & Run

**1.** Clone the [GitHub repository](https://github.com/configcat-labs/configcat-with-redis-sample)

**2.** Install the dependencies:

```sh
npm install
```

**3.** Using docker, pull the latest Redis docker image and run the container:

```bash
docker pull redis
```

```bash
docker run --name container-redis -p 6379:6379 -d redis
```

**4** Add your [ConfigCat SDK key](https://app.configcat.com/sdkkey) to the `index.js` file.

**5.** Start the app:

```sh
npm start
```

You should see the following output logged to your terminal every 5 seconds:

```bash
> configcat-with-redis-sample@1.0.0 start
> node index.js

Connected to Redis
By default, ConfigCat’s auto-polling interval is 60 seconds. This means the cache is refreshed with the latest feature flag values from the ConfigCat Dashboard every 60 seconds. When you query a feature flag value between intervals, the result is served from the Redis cache instead of making a request to the Dashboard.
17:56:55 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
17:57:00 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
17:57:05 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
17:57:10 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
17:57:15 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
17:57:20 GMT-0300 (French Guiana Time) isMyAwesomeFeatureEnabled: false
```

Toggling on or off the feature flag within your [ConfigCat dashboard](https://app.configcat.com) will force the cache to refresh. As a result, The new value will be pulled from [ConfigCat](https://configcat.com) to replace the existing value in the cache.

## Learn more

Useful links to technical resources.

- [Using a custom cache implementation](https://configcat.com/docs/sdk-reference/node/#using-custom-cache-implementation)
- [Redis documentation](https://redis.io/docs/latest/)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [X](https://x.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[Chavez Harris](https://github.com/codedbychavez)

## Contributions

Contributions are welcome!
