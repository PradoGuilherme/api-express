const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URL
const dbName = 'teste'
let connection = null

const connectionConfig = {
  ignoreUndefined: true,
  appname: dbName,
  poolSize: 1,
  ssl: false,
  connectTimeoutMS: 3000,
  useNewUrlParser: true,
  promiseLibrary: Promise
}

module.exports = collectionName => connection.collection(collectionName)

module.exports.connectDB = async () => {
  if (!connection) {
    const client = await MongoClient.connect(url, connectionConfig)
    connection = await client.db(dbName)
    console.log('Conexão aberta com o banco de dados!')
  }
}

module.exports.getConnection = () => connection
