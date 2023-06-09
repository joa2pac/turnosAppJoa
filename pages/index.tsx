import Layout from "@/Core/Components/layout/Layout";
import { Home } from "@/Presentation/Home/Home";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="TurnosApp">
      <Home />
    </Layout>
  );
};

export default HomePage;
