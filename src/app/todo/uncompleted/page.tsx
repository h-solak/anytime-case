import RowContainer from "@/components/base/RowContainer";
import SearchInput from "@/components/base/SearchInput";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import TaskList from "../components/TaskList";
import ColContainer from "@/components/base/ColContainer";
const fakeTasks = [
  {
    id: "1",
    title: "Complete assignment",
    description:
      "You should remember that you have no chance but to graduate this summer...",
    completed: false,
    createdAt: new Date("2024-03-28"),
  },
  {
    id: "2",
    title: "Prepare presentation",
    completed: true,
    createdAt: new Date("2024-03-27"),
  },
  {
    id: "3",
    title: "Attend meeting",
    description: "Don't forget to take notes!",
    completed: false,
    createdAt: new Date("2024-03-26"),
  },
];

export default function UnCompleted() {
  return (
    <RowContainer className={"justify-content-center"}>
      <SearchInput placeholder="Search uncompleted tasks..." />
      <CreateTask />
      <TaskList tasks={fakeTasks} />
    </RowContainer>
  );
}
