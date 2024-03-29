import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
export async function getStaticProps() {
  //정적페이지: 블로그
  // 개발환경에서는 ssr처럼 서버 콘솔에 계속 찍히지만 빌드후 정적파일을 열경우 찍히지않음
  console.log("빌드 시점 서버시간만 찍힘");

  return {
    props: { time: new Date().toISOString() },
  };
}
export default function SSG({ time }) {
  return <div>{time}</div>;
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
