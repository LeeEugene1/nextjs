import React from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
import { useEffect, useState } from "react";

export default function CSR() {
  const [time, setTime] = useState("");
  useEffect(() => {
    console.log("client");
    setTime(new Date().toISOString());
  }, []);
  return (
    <div>
      <h1 className="title">{time}</h1>
    </div>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
