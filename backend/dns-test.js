const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.ueweef6.mongodb.net", (err, records) => {
  if (err) {
    console.error("SRV Error:", err);
    return;
  }
  console.log(records);
});
