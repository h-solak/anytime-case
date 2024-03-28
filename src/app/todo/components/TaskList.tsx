"use client";

import { Key } from "react";
import Task, { TaskType } from "./Task";
import RowContainer from "@/components/base/RowContainer";

type TaskListType = {
  tasks: TaskType[];
};

export default function TaskList({ tasks }: TaskListType) {
  return (
    <RowContainer>
      {tasks?.map((task) => {
        const { id, title, description, completed, createdAt } = task;
        return (
          <Task
            key={id as Key}
            id={id}
            title={title}
            description={description}
            completed={completed}
            createdAt={createdAt}
          />
        );
      })}
    </RowContainer>
  );
}
