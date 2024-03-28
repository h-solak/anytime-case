import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { TaskType } from "@/app/todo/components/Task";

type ErrorType = {
  error: string;
};

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description } = req.body;

  try {
    const newTask = {
      title: title,
      description: description || "",
      completed: false,
      createdAt: new Date(),
    };
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    console.log("Document written with ID: ", docRef.id);

    res.status(200).json({ success: "Hello from Next.js!" });
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

export { POST, PUT, DELETE };
