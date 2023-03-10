import { FC, ReactNode } from "react";
import "./hi.css";

export const Hi: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <h1 className="red"> Trying out Vite.</h1>
      <div>{children}</div>
    </>
  );
};
