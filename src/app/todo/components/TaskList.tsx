import { Key } from "react";
import Task, { TaskType } from "./Task";
import RowContainer from "@/components/base/RowContainer";
import TasklistSvg from "@/assets/svg/tasklist.svg";
import Image from "next/image";

type TaskListType = {
  completed: boolean;
  tasks: TaskType[];
};

export default async function TaskList({ tasks, completed }: TaskListType) {
  return (
    <RowContainer className={"intro-animation pb-5"}>
      {tasks?.length > 0 ? (
        tasks?.map((task) => {
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
        })
      ) : (
        <div className="intro-animation mt-5 d-flex flex-column justify-content-center align-items-center">
          <Image
            className="mt-5"
            src={TasklistSvg}
            width={200}
            height={150}
            alt="tasks"
          />
          <span className="text-secondary mt-2 text-center">
            Create tasks and get them done!
          </span>
        </div>
      )}
    </RowContainer>
  );
}
