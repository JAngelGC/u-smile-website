import { ReactNode } from "react";
import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout: React.FC<{ children?: ReactNode }> = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
