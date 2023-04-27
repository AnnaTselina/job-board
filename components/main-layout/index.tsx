import { NextComponentType, NextPageContext } from "next/types";
import Header from "../header";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
