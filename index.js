import * as configcat from "@configcat/sdk/node";
import ConfigCatRedisCache from "./configcat-redis-cache.js";

const redisOptions = { url: "redis://localhost:6379" };

const configCatRedisCache = new ConfigCatRedisCache(redisOptions);

async function main() {
  await configCatRedisCache.ensureReady();

  const configCatClient = configcat.getClient(
    "configcat-sdk-1/C-HdCN7xrUmB6kDjUpl3Rw/Vh6BkatYSUqLKGFP_rVHWA",
    configcat.PollingMode.AutoPoll,
    {
      cache: configCatRedisCache,
    },
  );
  setInterval(() => {
    configCatClient
      .getValueAsync("isAwesomeFeatureEnabled", false)
      .then((value) => {
        console.log(
          `${new Date().toTimeString()} Your feature flag is: ${value}`,
        );
      });
  }, 5000);
}

main();
