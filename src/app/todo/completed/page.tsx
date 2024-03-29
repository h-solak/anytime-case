import RowContainer from "@/components/base/RowContainer";
import SearchInput from "@/components/base/SearchInput";
import CreateTask from "../components/CreateTask/CreateTask";
import TaskList from "../components/TaskList";
import { getTasks } from "@/services/Tasks";

export default async function Completed() {
  const tasks = await getTasks(true, "");
  return (
    <RowContainer>
      <SearchInput completed={true} placeholder="Search completed tasks..." />
      <CreateTask completed={true} />
      <TaskList tasks={tasks} completed={true} />
    </RowContainer>
  );
}
