import { useRouter } from "next/router";
import React, { useState } from "react";

export async function getServerSideProps() {
  console.log("server");

  return {
    props: {},
  };
}

//url을 바꾸는 3가지 방식
//location.replace('url'): 로컬 state 유지안됨(리랜더) - server찍힘
//router.push(url): 로컬 state 유지, data fetching - server찍힘
//router.push(url, as {shallow:true}): 로컬 state 유지 / data fetching x - 정말 url만 바뀜

export default function info() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = "initial" } = router.query;
  return (
    <div>
      <h1>My Info</h1>
      <h1>Clicked: {String(clicked)}</h1>
      Status: {status}
      <button
        onClick={() => {
          setClicked(true);
          location.replace("/shallow/my/info?status=editing");
        }}
      >
        edit(replace)
      </button>
      <button
        onClick={() => {
          setClicked(true);
          router.push("/shallow/my/info?status=editing");
        }}
      >
        edit(push)
      </button>
      <button
        onClick={() => {
          setClicked(true);
          router.push("/shallow/my/info?status=editing", undefined, {
            shallow: true,
          });
        }}
      >
        edit(shallow)
      </button>
    </div>
  );
}
