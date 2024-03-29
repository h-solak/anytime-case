import Image from "next/image";
import HelloSvg from "@/assets/svg/hello.svg";

export default function Home() {
  return (
    <main
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "75vh",
      }}
    >
      <Image src={HelloSvg} width={300} height={150} alt={"hello"} />
      <span className="mt-2 fs-4 fw-semibold">Welcome!</span>
      <span className="text-secondary text-center">
        You can access the tasks page by clicking the buttons <br /> located at
        the top of the page.
      </span>
    </main>
  );
}
