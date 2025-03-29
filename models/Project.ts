import mongoose, { Schema, Document, Model, Types } from "mongoose";

interface IProject extends Document {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    createdBy: Types.ObjectId;
}

const ProjectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        liveSiteUrl: { type: String, required: true },
        githubUrl: { type: String, required: true },
        category: { type: String, required: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

// Prevents model re-compilation in Next.js hot reload
const Project: Model<IProject> =
    mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
