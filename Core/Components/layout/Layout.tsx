import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>TurnosApp</title>
      </Head>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
