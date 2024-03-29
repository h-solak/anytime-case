import RowContainer from "@/components/base/RowContainer";
import SearchInput from "@/components/base/SearchInput";
import CreateTask from "../components/CreateTask/CreateTask";
import TaskList from "../components/TaskList";
import { getTasks } from "@/services/Tasks";

export default async function UnCompleted() {
  const tasks = await getTasks(false, "");
  return (
    <RowContainer>
      <SearchInput
        completed={false}
        placeholder="Search uncompleted tasks..."
      />
      <CreateTask completed={false} />
      <TaskList tasks={tasks} completed={false} />
    </RowContainer>
  );
}
