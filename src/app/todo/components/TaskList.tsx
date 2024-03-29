import { Key } from "react";
import Task, { TaskType } from "./Task/Task";
import RowContainer from "@/components/base/RowContainer";
import TasklistSvg from "@/assets/svg/tasklist.svg";
import Image from "next/image";

type TaskListType = {
  tasks: TaskType[];
  searchQuery: string;
  tasksLoading: boolean;
};

export default function TaskList({
  tasks,
  searchQuery,
  tasksLoading,
}: TaskListType) {
  if (tasksLoading) {
    return (
      <div className="absolute-center d-flex justify-content-center">
        <span className="rotate-loader-xl" />
      </div>
    );
  }
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
      ) : searchQuery?.length > 0 ? ( // If there are no tasks
        <div className="intro-animation mt-5 d-flex flex-column justify-content-center align-items-center">
          <span className="text-secondary mt-2 text-center">
            No results found
          </span>
        </div> // If there are no tasks
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
