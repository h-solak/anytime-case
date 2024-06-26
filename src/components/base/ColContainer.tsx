import { ReactNode } from "react";

type Props = {
  className?: String;
  children: ReactNode;
};

export default function ColContainer({ className, children }: Props) {
  const defaultClassName =
    "col-12 col-md-6 col-xl-4 d-flex justify-content-start";
  return <div className={`${defaultClassName} ${className}`}>{children}</div>;
}
