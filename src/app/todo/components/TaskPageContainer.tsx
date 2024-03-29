"use client";
import RowContainer from "@/components/base/RowContainer";
import SearchInput from "@/components/base/SearchInput";
import CreateTask from "./CreateTask/CreateTask";
import TaskList from "./TaskList";
import { getTasks } from "@/services/Tasks";
import { useEffect, useState } from "react";
import { TaskType } from "./Task/Task";

type TaskListType = {
  tasks: TaskType[];
};

export default function TaskPageContainer({ tasks }: TaskListType) {
  const [tasksSearched, setTasksSearched] = useState<TaskType[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tasksLoading, setTasksLoading] = useState(true);
  const handleSearch = () => {
    setTasksLoading(true);
    if (searchQuery == "") {
      setTasksSearched(tasks);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase().trim();
      const filteredTasks = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(lowercaseQuery) ||
          (task.description &&
            task.description.toLowerCase().includes(lowercaseQuery))
      );
      setTasksSearched(filteredTasks);
    }
    setTasksLoading(false);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, tasks]);
  return (
    <RowContainer>
      <SearchInput
        placeholder="Search completed tasks..."
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CreateTask completed={true} />
      <TaskList
        tasks={tasksSearched}
        searchQuery={searchQuery}
        tasksLoading={tasksLoading}
      />
    </RowContainer>
  );
}
