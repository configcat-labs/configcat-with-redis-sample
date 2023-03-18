const configcat = require("configcat-node");
const configcatRedisCache = require("./configcat-redis-cache");

const redisOptions = { host: "localhost", port: 6379 };

const configCatClient = configcat.getClient("0yDbCLmNK0qIUakB2LFJDA/u0Z5j4oDjkuHKOVJkIo9Dw", configcat.PollingMode.AutoPoll, 
  {
    cache: configcatRedisCache(redisOptions)
  }
);

setInterval(() => {
  configCatClient.getValueAsync("isMyAwesomeFeatureEnabled", false).then(value => {
    console.log(`${new Date().toTimeString()} isMyAwesomeFeatureEnabled: ${value}`);
  });
}, 5000);