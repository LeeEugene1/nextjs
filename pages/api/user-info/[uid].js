export default function handler(req, res) {
  const { uid } = req.query;
  const cookie = req.cookies.test || "";
  res.status(200).json({ name: `Yujin ${uid} ${JSON.stringify(cookie)}` });
  //   res.status(500).json({ error: `error` });
}
// https://nextjs.org/docs/pages/building-your-application/routing/middleware
