import React from "react";
import { FaPlus } from "react-icons/fa6";

interface CreateTaskButtonProps {
  setIsCreatingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTaskButton({
  setIsCreatingMode,
}: CreateTaskButtonProps) {
  return (
    <button
      className="w-100 btn btn-primary d-flex justify-content-center align-items-center gap-1"
      onClick={() => setIsCreatingMode(true)}
    >
      <FaPlus />
      Create Task
    </button>
  );
}
