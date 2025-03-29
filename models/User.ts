import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    avatarUrl: string;
    githubUrl?: string;
    linkedinUrl?: string;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        avatarUrl: { type: String, required: true },
        githubUrl: { type: String, default: "" },
        linkedinUrl: { type: String, default: "" },
    },
    { timestamps: true }
);

// Prevents model re-compilation in Next.js hot reload
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
