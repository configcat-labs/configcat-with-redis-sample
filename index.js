import * as configcat from "@configcat/sdk";
import { MyRedisCache } from "./configcat-redis-cache.js";

const redisOptions = { url: "redis://localhost:6379" };

const myRedisCache = new MyRedisCache(redisOptions);

async function main() {}

main();
