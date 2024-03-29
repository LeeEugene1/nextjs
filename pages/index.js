export async function getServerSideProps() {
  console.log("server");

  return {
    props: { time: new Date().toISOString() },
  };
}
export default function Home({ time }) {
  return (
    <>
      <h1 className="title">SSR 페이지입니다.</h1>
      <h3>{time}</h3>
    </>
  );
}
