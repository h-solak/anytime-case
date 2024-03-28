"use client";
import { useEffect } from "react";

export default function Home() {
  const handlePost = async () => {
    const bilmemne = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(bilmemne);
  };
  useEffect(() => {
    handlePost();
  }, []);
  return (
    <main>
      <h6>Welcome!</h6>
    </main>
  );
}
