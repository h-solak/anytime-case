import { db } from "@/app/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function GET(req: any, res: NextApiResponse) {
  try {
    let tasks: any = [];
    const q = query(
      collection(db, "tasks"),
      where("completed", "==", true),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot?.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 404 }
    );
  }
}

export { GET };
