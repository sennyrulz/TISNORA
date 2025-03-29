import { connectDB } from "../lib/mongodb";
import Project from "../models/Project";
import User from "../models/User";
import { ProjectForm } from "../common.types";
import { Document, Types } from "mongoose";

export const fetchAllProjects = async (
  category: string | null | undefined, 
  endcursor: string | null | undefined, 
) => {
  await connectDB();

  try {
    const query = category ? { category } : {};
    const projects = await Project.find(query).sort({ createdAt: -1 }).limit(8).lean().exec();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects");
  }
};

export const createNewProject = async (form: ProjectForm, creatorId: string) => {
  await connectDB();
  try {
    if (!Types.ObjectId.isValid(creatorId)) throw new Error("Invalid creatorId format");
    const project = new Project({ ...form, createdBy: new Types.ObjectId(creatorId) });
    await project.save();
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
};


export const updateProject = async (form: ProjectForm, projectId: string) => {
  await connectDB();
  try {
    const updatedProject = await Project.findByIdAndUpdate(projectId, form, { new: true }).lean().exec();
    if (!updatedProject) throw new Error("Project not found");
    return updatedProject;
  } catch (error) {
    console.error("Error updating project:", error);
    throw new Error("Failed to update project");
  }
};

export const deleteProject = async (id: string) => {
  await connectDB();
  try {
    const deletedProject = await Project.findByIdAndDelete(id).exec();
    if (!deletedProject) throw new Error("Project not found");
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    throw new Error("Failed to delete project");
  }
};

export const getProjectDetails = async (id: string) => {
  await connectDB();
  try {
    if (!Types.ObjectId.isValid(id)) throw new Error("Invalid project ID format");

    const project = await Project.findById(id).populate("createdBy").lean().exec();
    if (!project) throw new Error("Project not found");

    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Failed to fetch project details");
  }
};


export const createUser = async (name: string, email: string, avatarUrl: string) => {
  await connectDB();
  try {
    const existingUser = await User.findOne({ email }).lean().exec();
    if (existingUser) return existingUser;

    const user = new User({ name, email, avatarUrl });
    await user.save();
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export const getUser = async (email: string) => {
  await connectDB();
  try {
    const user = await User.findOne({ email }).lean().exec();
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};

export const getUserProjects = async (id: string, limit: number = 4) => {
  await connectDB();
  try {
    if (!Types.ObjectId.isValid(id)) throw new Error("Invalid user ID format");

    return await Project.find({ createdBy: new Types.ObjectId(id) })
      .limit(limit)
      .lean()
      .exec();
  } catch (error) {
    console.error("Error fetching user projects:", error);
    throw new Error("Failed to fetch user projects");
  }
};

