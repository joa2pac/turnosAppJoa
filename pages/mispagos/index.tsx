import Layout from "@/Core/Components/layout/Layout";
import { MisPagos } from "@/Presentation/MisPagos/MisPagos";

import type { NextPage } from "next";

const MisPagosPage: NextPage = () => {
  return (
    <Layout title="TurnosApp">
      <MisPagos />
    </Layout>
  );
};

export default MisPagosPage;
