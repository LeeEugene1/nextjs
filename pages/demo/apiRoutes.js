import { useEffect, useState } from "react";
import Layout from "/components/Layout";
import SubLayout from "/components/SubLayout";
import { useRouter } from "next/router";

export default function apiRoutes() {
  const router = useRouter();
  const [name, setName] = useState("?");
  const { uid } = router.query; //http://localhost:3000/demo/apiRoutes?uid=1
  //   useEffect(() => {
  //     fetch("/api/hello")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setName(data.message);
  //       });
  //   }, []);

  useEffect(() => {
    if (uid !== null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, [uid]);
  return (
    <div>
      <h1 className="title">ApiRoutes</h1>
      <div>1. url끝에 ?uid=1 를 붙여보세요</div>
      <div>
        2. 브라우저에 test를 key값으로하는 쿠키를 추가해보세요 예: "test":"test"
      </div>

      {name}
      <div>
        <a href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">
          Doc
        </a>
      </div>
    </div>
  );
}
apiRoutes.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
