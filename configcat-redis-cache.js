import { createClient } from "redis";

export default class MyRedisCache {
  constructor(redisOptions) {
    this.cacheClient = createClient(redisOptions);

    this.cacheClient.on("connect", () => {
      console.log("Connected to Redis");
    });

    this.cacheClient.on("error", (err) => {
      console.error("Redis error", err);
    });
  }

  async connect() {
    if (!this.cacheClient.isOpen) {
      await this.cacheClient.connect();
    }
  }

  async disconnect() {
    await this.cacheClient.quit();
  }

  async get(key) {
    try {
      const value = await this.cacheClient.get(key);
      console.log("GET", key);
      return value;
    } catch (err) {
      console.error("Redis GET error:", err);
      return null;
    }
  }

  async set(key, item) {
    try {
      await this.cacheClient.set(key, item);
      console.log("SET", key);
    } catch (err) {
      console.error("Redis SET error:", err);
    }
  }
}
