import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../lib/mongodb"; // Correct import
import Project from "../models/Project";
import User from "../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB(); // Ensure DB connection inside the handler

    switch (req.method) {
        case "POST":
            return createProject(req, res);
        case "GET":
            return getProjects(req, res);
        case "PUT":
            return updateProject(req, res);
        case "DELETE":
            return deleteProject(req, res);
        default:
            return res.status(405).json({ error: "Method Not Allowed" });
    }
}

// Create a new project
const createProject = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: "Error creating project", details: error });
    }
};

// Get all projects (with optional category filter)
const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();
        const { category } = req.query;
        const filter = category ? { category } : {};
        const projects = await Project.find(filter).populate("createdBy", "name email avatarUrl");
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: "Error fetching projects", details: error });
    }
};

// Update a project
const updateProject = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();
        const { id, ...updateData } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProject) return res.status(404).json({ error: "Project not found" });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Error updating project", details: error });
    }
};

// Delete a project
const deleteProject = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();
        const { id } = req.body;
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) return res.status(404).json({ error: "Project not found" });
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting project", details: error });
    }
};


export const createUser = async (name: string, email: string, avatarUrl: string, githubUrl?: string, linkedinUrl?: string) => {
  await connectDB();
  try {
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) return existingUser;

    const newUser = new User({ name, email, avatarUrl, githubUrl, linkedinUrl });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};

