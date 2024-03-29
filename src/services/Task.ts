import { TaskType } from "@/app/todo/components/Task/Task";

const apiTask = `http://localhost:3000/api/task`;

//Created a function to make the code shorter & more readable
const requestOptions = (type: string, body?: any) => {
  return {
    method: type, //GET, POST, PUT, DELETE
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

type createTaskType = (
  title: string,
  description?: string
) => Promise<any> | [];

//if completed is true, get completed tasks. else get uncompleted tasks
const createTask: createTaskType = async (title, description) => {
  const response = await fetch(
    apiTask,
    requestOptions("POST", {
      title: title,
      description: description,
    })
  );
  const responseData = await response.json();
  return responseData;
};

const updateTask = async (
  id: string,
  title: string,
  description: string,
  completed: boolean
) => {
  const response = await fetch(
    apiTask,
    requestOptions("PUT", {
      id: id,
      title: title,
      description: description,
      completed: completed, //new completed value
    })
  );
  const responseData = await response.json();
  return responseData;
};

const deleteTask = async (id: string) => {
  const response = await fetch(
    apiTask,
    requestOptions("DELETE", {
      id: id,
    })
  );
  const responseData = await response.json();
  return responseData;
};

export { createTask, updateTask, deleteTask };
