"use client";

import ColContainer from "@/components/base/ColContainer";
import RowContainer from "@/components/base/RowContainer";
import {
  handleCheckTask,
  handleDeleteTask,
  handleUpdateTaskDetails,
} from "../actions/actions";
import { useState } from "react";
import Input from "@/components/base/Input";
import { MdDelete, MdEdit } from "react-icons/md";

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
  const [editingMode, setEditingMode] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  return (
    <RowContainer className={"mt-4"}>
      {!editingMode?.id ? (
        <ColContainer
          className={"bg-card py-3 px-3 rounded-3 d-flex flex-column gap-2"}
        >
          <div className="d-flex align-items-start gap-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={completed}
              onChange={(e) =>
                handleCheckTask(id, title, description, completed)
              }
              style={{
                height: 20,
                width: 20,
                cursor: "pointer",
              }}
            />
            <div className="d-flex flex-column">
              <label className="fw-bold">{title}</label>

              {description && (
                <p className="text-secondary m-0 fs-7">{description}</p>
              )}
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
        <ColContainer>
          <form
            action={(formdata) => {
              handleUpdateTaskDetails(formdata, id, completed);
              setEditingMode({
                id: "",
                title: "",
                description: "",
                completed: false,
              });
            }}
            className="w-100 bg-card flex-column py-3 px-2 rounded-3 d-flex align-items-start justify-content-start gap-2"
          >
            <Input
              type="text"
              name="title"
              className="w-100 text-white border-bottom"
              defaultValue={editingMode.title}
            />
            <textarea
              name="description"
              className="w-100 px-2 default-input text-white"
              placeholder={editingMode?.description ? "" : "Add a description"}
              defaultValue={editingMode.description}
              style={{ resize: "none" }}
            />
            <button type="submit" className="w-100 btn btn-primary">
              Save Changes
            </button>
          </form>
        </ColContainer>
      )}
    </RowContainer>
  );
}
