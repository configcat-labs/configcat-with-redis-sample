import * as configcat from "@configcat/sdk/node";
import MyRedisCache from "./configcat-redis-cache.js";

const redisOptions = { url: "redis://localhost:6379" };

const myRedisCache = new MyRedisCache(redisOptions);

async function main() {
  await myRedisCache.connect();

  const configCatClient = configcat.getClient(
    "YOUR-CONFIGCAT-SDK-KEY",
    configcat.PollingMode.AutoPoll,
    {
      cache: myRedisCache,
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

  process.on("SIGINT", async () => {
    console.log("Shutting down...");
    await myRedisCache.disconnect();
    process.exit();
  });
}

main();
