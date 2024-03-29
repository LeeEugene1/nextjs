import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export default function CSR() {
  useEffect(() => {}, []);
  return <div>csr</div>;
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
