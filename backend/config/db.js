import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  if (isConnected) {
    return;
  }

  // Avoid deprecation noise & make queries fail fast instead of buffering forever.
  mongoose.set("strictQuery", true);

  const conn = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  isConnected = !!conn.connections[0].readyState;

  console.log(
     `✅ MongoDB connected: ${conn.connection.host}/${conn.connection.name}`
  );
  return conn;
};