const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("MongoDB Connected Successfully");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();
