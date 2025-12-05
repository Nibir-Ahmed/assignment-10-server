const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require ('cors');

//middleware
app.use(cors());
app.use(express.json());

//i7mB01Ic57scuwT4
//learnhub_user

const uri = "mongodb+srv://learnhub_user:i7mB01Ic57scuwT4@cluster0.oyr6l0t.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('simple crud server is running ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})