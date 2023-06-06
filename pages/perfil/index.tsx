import Layout from "@/Core/Components/layout/Layout";

import { Perfil } from "@/Presentation/Perfil/Perfil";

import type { NextPage } from "next";

const PerfilPage: NextPage = () => {
  return (
    <Layout title="TurnosApp">
      <Perfil />
    </Layout>
  );
};

export default PerfilPage;
