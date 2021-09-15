import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
let mongo: MongoMemoryServer
export async function dbConnect() {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  mongoose.connect(uri)
   .then(() => {
   console.log("Database connected")
   })
}

export async function dbDisconnect(){
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
}