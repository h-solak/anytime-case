import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function POST(req: any, res: NextApiResponse) {
  const { title, description } = await req.json();
  try {
    const newTask = {
      title: title,
      description: description || "",
      completed: false,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "tasks"), newTask);

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

async function PUT(req: any, res: NextApiResponse) {
  const { id, title, description, completed } = await req.json();
  try {
    const date = new Date();
    const newTask = {
      title: title,
      description: description || "",
      completed: completed,
    };

    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, newTask);

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

async function DELETE(req: any, res: NextApiResponse) {
  const { id } = await req.json();
  try {
    await deleteDoc(doc(db, "tasks", id));
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}

export { POST, PUT, DELETE };
