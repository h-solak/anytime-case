"use server";

import { createTask, deleteTask, updateTask } from "@/services/Task";
import { getTasks } from "@/services/Tasks";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const handleAddTask = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  if (title?.length > 0) {
    await createTask(title, description || "");
    formData.set("title", "");
    formData.set("description", "");
    revalidatePath(`/todo/uncompleted`); //default task is not checked
  }
};

export const handleCheckTask = async (
  id: string,
  title: string,
  description: string,
  completed: boolean
) => {
  await updateTask(id, title, description, !completed); //new completed value --> !completed
  revalidatePath(`/todo${!completed ? "/completed" : "/uncompleted"}`);
};

export const handleUpdateTaskDetails = async (
  formData: FormData,
  id: string,
  completed: boolean
) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  await updateTask(id, title, description, completed);
  revalidatePath(`/todo${completed ? "/completed" : "/uncompleted"}`);
};

export const handleDeleteTask = async (id: string, completed: boolean) => {
  await deleteTask(id);
  revalidatePath(`/todo${completed ? "/completed" : "/uncompleted"}`);
};

export const handleGetTasks = async (
  completed: boolean,
  searchQuery: string
) => {
  const _cookies = cookies();
  await getTasks(completed, searchQuery);
  revalidatePath(`/todo${completed ? "/completed" : "/uncompleted"}`);
};
