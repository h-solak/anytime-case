"use client";

import ColContainer from "@/components/base/ColContainer";
import RowContainer from "@/components/base/RowContainer";
import { handleCheckTask, handleDeleteTask } from "../../actions/actions";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditTaskForm from "./EditTaskForm";

export type EditingModeType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type TaskType = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
};

export default function Task({
  id,
  title,
  completed,
  description,
  createdAt,
}: TaskType) {
  const [editingMode, setEditingMode] = useState<EditingModeType>({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  return (
    <RowContainer className={"mt-4"}>
      {/* Task */}
      {!editingMode?.id ? (
        <ColContainer
          className={"bg-card py-3 px-3 rounded-3 d-flex flex-column gap-2"}
        >
          <div className="d-flex align-items-start gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={completed}
              onChange={() =>
                handleCheckTask(id, title, description || "", completed)
              }
              style={{
                height: 20,
                width: 20,
                cursor: "pointer",
              }}
            />
            <div className="d-flex flex-column">
              <label className="fw-bold">{title}</label>
              {description && <p className="text- m-0 fs-7">{description}</p>}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start gap-1">
            <button
              title="Edit"
              className="btn bg-transparent border-0"
              onClick={() =>
                setEditingMode({
                  id: id,
                  title: title,
                  description: description || "",
                  completed: completed,
                })
              }
            >
              <MdEdit className="fs-5 text-secondary" />{" "}
              <span className="text-secondary fs-8">Edit</span>
            </button>
            <button
              title="Delete"
              className="btn bg-transparent border-0"
              onClick={() => handleDeleteTask(id, completed)}
            >
              <MdDelete className="fs-5 text-secondary" />
              <span className="text-secondary fs-8">Delete</span>
            </button>
          </div>
        </ColContainer>
      ) : (
        //Show edit mode if editing mode state has an id (that means user has clicked on edit button)
        <EditTaskForm
          id={id}
          completed={completed}
          editingMode={editingMode}
          setEditingMode={setEditingMode}
        />
      )}
    </RowContainer>
  );
}
