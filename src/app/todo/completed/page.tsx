"use client";
import RowContainer from "@/components/base/RowContainer";
import SearchInput from "@/components/base/SearchInput";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
import ColContainer from "@/components/base/ColContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useEffect } from "react";
const fakeTasks = [
  {
    id: "1",
    title: "Complete assignment",
    description:
      "You should remember that you have no chance but to graduate this summer...",
    completed: false,
    createdAt: new Date("2024-03-28"),
  },
  {
    id: "2",
    title: "Prepare presentation",
    description:
      "Use AI to prepare more efficently, there are plenty of websites to use!",
    completed: true,
    createdAt: new Date("2024-03-27"),
  },
  {
    id: "3",
    title: "Attend meeting",
    completed: false,
    createdAt: new Date("2024-03-26"),
  },
];

export default function Completed() {
  const handleGetTasks = async () => {
    let tasks: any = [];
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach(async (doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    console.log(querySnapshot);
    return tasks;
  };

  useEffect(() => {
    console.log(handleGetTasks());
  }, []);

  return (
    <RowContainer className={"justify-content-center"}>
      <SearchInput placeholder="Search completed tasks..." />
      <CreateTask />
      <TaskList tasks={fakeTasks} />
    </RowContainer>
  );
}
