// import mongoose from 'mongoose';

import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// let cached = (global as any).mongoose || { conn: null, promise: null };

// export const dbConnect = async () => {
//   if (cached.conn) return cached.conn;

//   if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

//   cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
//     dbName: 'evently',
//     bufferCommands: false,
//   })

//   cached.conn = await cached.promise;

//   return cached.conn;
// }


const DBURI=process.env.DBURI as string

export default async function dbConnect(){
  mongoose.connect(DBURI).then(()=>{
    console.log("DB IS CONNECTED")
  })
}