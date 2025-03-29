import * as mongoose from "mongoose";
const { Schema, Model, Types } = mongoose;

interface IProject {
    _id?: Types.ObjectId;
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
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        image: { type: String, required: true, trim: true },
        liveSiteUrl: { 
            type: String, 
            required: true, 
            trim: true, 
            match: /^https?:\/\//i  // Basic URL validation 
        },
        githubUrl: { 
            type: String, 
            required: true, 
            trim: true, 
            match: /^https?:\/\//i  
        },
        category: { type: String, required: true, trim: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

// Prevents model re-compilation in Next.js hot reload
const Project: Model<IProject> = 
    mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
