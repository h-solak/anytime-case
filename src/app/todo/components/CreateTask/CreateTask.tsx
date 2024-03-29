"use client";
import { useState } from "react";
import ColContainer from "@/components/base/ColContainer";
import RowContainer from "@/components/base/RowContainer";
import TaskForm from "./TaskForm";
import CreateTaskButton from "./CreateTaskButton";

type CreateTaskProps = {
  completed: boolean;
};
export default function CreateTask({ completed }: CreateTaskProps) {
  const [isCreatingMode, setIsCreatingMode] = useState(false);
  return (
    <RowContainer className="mt-4">
      <ColContainer>
        {isCreatingMode ? (
          <TaskForm
            completed={completed}
            setIsCreatingMode={setIsCreatingMode}
          />
        ) : (
          <CreateTaskButton setIsCreatingMode={setIsCreatingMode} />
        )}
      </ColContainer>
    </RowContainer>
  );
}
