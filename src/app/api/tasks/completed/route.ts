import { db } from "@/app/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const tasks: any = await getDocs(collection(db, "tasks"));
    const tasks2 = query(
      collection(db, "tasks"),
      where("completed", "==", true)
    );
    console.log(tasks2);
    // orderBy("createdAt")

    let tasks: any = [];
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.log("NOOOOOOOOO", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 404 }
    );
  }
}

export { GET };
