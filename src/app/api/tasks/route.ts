import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedData = await response.json();
  return Response.json(parsedData);
}

const POST = async (title: String) => {
  try {
    const newTask = {
      title: title,
      done: false,
    };
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    console.log("Document written with ID: ", docRef.id);
    return Response.json({
      success: true,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const PUT = async () => {
  return Response.json("PUT");
};

const DELETE = async () => {
  return Response.json("DELETE");
};

export { GET, POST, PUT, DELETE };
