import mongoose, { Schema, Model } from "mongoose";

interface IUser {
    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    avatarUrl: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        avatarUrl: { type: String, required: true },
        githubUrl: { type: String, default: null },
        linkedinUrl: { type: String, default: null },
    },
    { timestamps: true }
);

// Prevents model re-compilation in Next.js hot reload
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
