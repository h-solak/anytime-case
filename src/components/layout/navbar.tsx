"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  //if the current path is completed, uncompleted, or none
  const currentPath = pathname.match(/(uncompleted|completed)/)?.[0] || "";
  return (
    <nav className="p-4 d-flex align-items-center justify-content-center gap-4">
      <Link href={"/todo/uncompleted"}>
        <button
          className={`btn ${
            currentPath === "uncompleted"
              ? "btn-primary"
              : "btn-outline-secondary"
          }`}
        >
          Uncompleted
        </button>
      </Link>
      <Link href={"/todo/completed"}>
        <button
          className={`btn ${
            currentPath === "completed"
              ? "btn-primary"
              : "btn-outline-secondary"
          }`}
        >
          Completed
        </button>
      </Link>
    </nav>
  );
}
