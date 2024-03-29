import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Input from "@/components/base/Input";
import { handleAddTask } from "../../actions/actions";

interface TaskForm {
  title: string;
  description: string;
}
interface TaskFormProps {
  completed: boolean;
  setIsCreatingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskForm({
  completed,
  setIsCreatingMode,
}: TaskFormProps) {
  const [creatingInProgress, setCreatingInProgress] = useState(false);
  return (
    <form
      action={async (formData) => {
        if (formData.get("title")) {
          setCreatingInProgress(true);
          await handleAddTask(formData);
          setCreatingInProgress(false);
          formData.set("title", "");
          formData.set("description", "");
          setIsCreatingMode(false);
        }
      }}
      className="w-100"
    >
      <div className="w-100 bg-white rounded-3 d-flex flex-column gap-0">
        <div className="d-flex align-items-center">
          <Input
            className="p-2 rounded-1"
            placeholder="Title*"
            name="title"
            required
          />
          <IoCloseSharp
            className="mx-2 fs-3"
            onClick={() => setIsCreatingMode(false)}
            style={{
              color: "grey",
              cursor: "pointer",
            }}
          />
        </div>
        <textarea
          className="default-input p-2 w-100 rounded-1"
          placeholder="Description"
          name="description"
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="py-1 w-100 btn btn-primary rounded-top-0 d-flex justify-content-center align-items-center gap-1"
        >
          {!creatingInProgress ? "Save" : <span className="rotate-loader" />}
        </button>
      </div>
    </form>
  );
}
