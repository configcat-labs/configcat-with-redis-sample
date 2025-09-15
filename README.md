# How to use ConfigCat with Redis | Sample application

This is a companion repo the the blog article titled: **How to use ConfigCat with Redis**. The article walks you through understanding how Redis works and how you can use it alongside ConfigCat in a Node.js console application.

## Build & Run

**1.** Clone the [GitHub repository](https://github.com/configcat-labs/configcat-with-redis-sample)

**2.** Run the following commands to install the required node packages:

```sh
npm install
```

The `configcat-node` and `redis` npm packages will also be installed using this command. The `configcat-node` package will be used as a client to connect to and pull the feature flag status from your [ConfigCat dashboard](https://app.configcat.com). `redis` will be used similarly, and would connect to a local docker instance of Redis.

**3.** Using docker, pull the latest Redis docker image and run the container:

```sh
docker pull redis
```

```sh
docker run --name container-redis -p 6379:6379 -d redis
```

**4.** Start the node application with the following command:

```sh
npm start
```

You should see the following output logged to your terminal every 5 seconds:

```sh
> configcat-with-redis-sample@1.0.0 start
> node index.js

Connected to Redis
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
- [Official Redis website](https://redis.io/)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [X](https://x.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[Chavez Harris](https://github.com/codedbychavez)

## Contributions

Contributions are welcome!
