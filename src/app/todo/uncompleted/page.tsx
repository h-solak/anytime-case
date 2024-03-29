import RowContainer from "@/components/base/RowContainer";
import { getTasks } from "@/services/Tasks";
import TaskPageContainer from "../components/TaskPageContainer";

export default async function UnCompleted() {
  const tasks = await getTasks(false);
  return (
    <RowContainer>
      <TaskPageContainer tasks={tasks} />
    </RowContainer>
  );
}
