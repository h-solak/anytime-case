import RowContainer from "@/components/base/RowContainer";
import { getTasks } from "@/services/Tasks";
import TaskPageContainer from "../components/TaskPageContainer";

export default async function Completed() {
  const tasks = await getTasks(true);
  return (
    <RowContainer>
      <TaskPageContainer tasks={tasks} />
    </RowContainer>
  );
}
