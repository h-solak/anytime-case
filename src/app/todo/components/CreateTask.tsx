"use client";
import ColContainer from "@/components/base/ColContainer";
import Input from "@/components/base/Input";
import RowContainer from "@/components/base/RowContainer";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function CreateTask() {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <RowContainer className="mt-4">
      <ColContainer>
        {isCreating ? (
          <div className="bg-white rounded-3 d-flex flex-column gap-0">
            <div className="d-flex align-items-center">
              <Input className="p-2 w-100 rounded-1" placeholder="Title*" />
              <IoCloseSharp
                className="mx-2 fs-3"
                onClick={() => setIsCreating(false)}
                style={{
                  color: "grey",
                  cursor: "pointer",
                }}
              />
            </div>
            <textarea
              className="default-input p-2 w-100 rounded-1"
              placeholder="Description"
              style={{ resize: "none" }}
            />
            <button
              className="py-1 w-100 btn btn-primary rounded-top-0 d-flex justify-content-center align-items-center gap-1"
              onClick={() => setIsCreating(false)}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="w-100 btn btn-primary d-flex justify-content-center align-items-center gap-1"
            onClick={() => setIsCreating(true)}
          >
            <FaPlus />
            Create Task
          </button>
        )}
      </ColContainer>
    </RowContainer>
  );
}
