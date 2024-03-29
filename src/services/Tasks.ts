import { TaskType } from "@/app/todo/components/Task/Task";

const apiTasks = `http://localhost:3000/api/tasks`;
type getTasksType = (
  completed: boolean,
  searchQuery: string | ""
) => Promise<TaskType[]> | [];

//if completed is true, get completed tasks. else get uncompleted tasks
const getTasks: getTasksType = async (completed, searchQuery = "") => {
  const response = await fetch(
    `${apiTasks}${completed ? "/completed" : "/uncompleted"}/${searchQuery}`
  );
  const responseData = await response.json();
  return responseData;
};

export { getTasks };
