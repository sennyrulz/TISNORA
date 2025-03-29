import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

// Global cache for database connection to prevent multiple instances in hot-reloading environments
interface MongooseCache {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
}

// Use Node.js global object to store the cached connection
let cached: MongooseCache = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: "olotooluwaseun",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((mongoose) => mongoose.connection)
            .catch((err) => {
                console.error("MongoDB connection error:", err);
                throw err;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null; // Reset promise on failure
        throw err;
    }

    return cached.conn;
}

// Assign cached instance to global for persistence in serverless environments
(global as any).mongoose = cached;
