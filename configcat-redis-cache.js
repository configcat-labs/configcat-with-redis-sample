const util = require("util");
const redis = require("redis");

function configcatRedisCache(redisClientOptions) {

  this.isRedisAvailable = false;
  this.cacheClient = redis.createClient(redisClientOptions);

  this.cacheClient.connect();

  this.cacheClient.on("connect", () => {
    console.log("Connected to Redis");
    this.isRedisAvailable = true;
  });

  this.cacheClient.on("error", (error) => {
    console.log(`Redis error: ${error}`);
    this.isRedisAvailable = false;
  });

  this.lastCacheItems = {};
}

configcatRedisCache.prototype.get = async function (key) {
  if (!this.isRedisAvailable) {
    return this.lastCacheItems[key];
  }

  try {
    const getAsync = util
      .promisify(this.cacheClient.get)
      .bind(this.cacheClient);

    return JSON.parse(await getAsync(key));
  } catch (error) {
    console.error(`Cache read failed! \n ${error}`);
    return this.lastCacheItems[key];
  }
};

configcatRedisCache.prototype.set = async function (key, item) {
  this.lastCacheItems[key] = item;

  try {
    const setAsync = util
      .promisify(this.cacheClient.set)
      .bind(this.cacheClient);

    await setAsync(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Cache write failed! \n ${error}`);
  }
};

module.exports = configcatRedisCache;