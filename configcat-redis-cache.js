import { createClient } from "redis";

export default class ConfigCatRedisCache {
  constructor(redisClientOps) {
    this.cacheClient = createClient(redisClientOps);
    this.isRedisAvailable = false;

    this.cacheClient.on("connect", () => {
      console.log("Connected to Redis");
      this.isRedisAvailable = true;
    });

    this.cacheClient.on("error", (err) => {
      console.error("Redis error:", err);
      this.isRedisAvailable = false;
    });

    this.ready = this.cacheClient
      .connect()
      .then(() => {
        this.isRedisAvailable = true;
      })
      .catch((err) => {
        console.error("Failed to connect to Redis:", err);
        this.isRedisAvailable = false;
      });
  }

  async ensureReady() {
    await this.ready;
  }

  async get(key) {
    await this.ensureReady();
    if (!this.isRedisAvailable) return null;

    try {
      const value = await this.cacheClient.get(key);
      console.log(`GET key "${key}" returned:`, value);
      return value;
    } catch (err) {
      console.error("Redis GET error:", err);
      return null;
    }
  }

  async set(key, item) {
    await this.ensureReady();
    if (!this.isRedisAvailable) return;

    try {
      await this.cacheClient.set(key, item);
      console.log(`SET key "${key}" = ${item}`);
    } catch (err) {
      console.error("Redis SET error:", err);
    }
  }
}
