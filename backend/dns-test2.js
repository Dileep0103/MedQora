const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("DNS Servers:", dns.getServers());

dns.resolve4("google.com", (err, addresses) => {
  console.log("A Record:", err || addresses);
});

dns.resolveSrv("_mongodb._tcp.cluster0.ueweef6.mongodb.net", (err, records) => {
  console.log("SRV:", err || records);
});
