"use client";
import ColContainer from "@/components/base/ColContainer";
import RowContainer from "@/components/base/RowContainer";
import { FormEvent, useState } from "react";
import TaskForm from "./TaskForm";
import CreateTaskButton from "./CreateTaskButton";
import { createTask } from "@/services/Task";
import { useRouter } from "next/router";

type CreateTaskProps = {
  completed: boolean;
};
export default function CreateTask({ completed }: CreateTaskProps) {
  // const router = useRouter();
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
