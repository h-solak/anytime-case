"use client";

import ColContainer from "@/components/base/ColContainer";
import RowContainer from "@/components/base/RowContainer";

export type TaskType = {
  id: String;
  title: String;
  description?: String;
  completed: Boolean;
  createdAt: Date;
};

export default function Task({
  id,
  title,
  completed,
  description,
  createdAt,
}: TaskType) {
  return (
    <RowContainer className={"mt-4"}>
      <ColContainer className={"d-flex align-items-start gap-2"}>
        <input
          className="form-check-input"
          type="checkbox"
          checked={true || false}
          onChange={() => null}
          style={{
            height: 18,
            width: 18,
            cursor: "pointer",
          }}
        />
        <div>
          <label className="fw-bold">{title}</label>
          <br />
          <p className="text-secondary">{description}</p>
        </div>
      </ColContainer>
    </RowContainer>
  );
}
