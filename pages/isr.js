import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
export async function getStaticProps() {
  //SSG + revalidate
  //SSG와 SSR의 장점
  console.log(
    "10초간 캐시유지 이후 다시 패칭한다(이것도 빌드된거 정적파일 열어야 확인가능)"
  );

  return {
    props: { time: new Date().toISOString() },
    revalidate: 10, // In seconds
  };
}
export default function ISR({ time }) {
  return <div>{time}</div>;
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
