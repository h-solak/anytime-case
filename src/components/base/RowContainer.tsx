import { ReactNode } from "react";

type Props = {
  className?: String;
  children: ReactNode;
};

export default function RowContainer({ className, children }: Props) {
  const defaultClassName = "w-100 row d-flex justify-content-center";
  return <div className={`${defaultClassName} ${className}`}>{children}</div>;
}
