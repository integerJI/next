import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{id}</h1>
      <p>Hello {id}!</p>
    </>
  );
}
