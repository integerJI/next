import { useRouter } from "next/router";

const Comment = () => {
  const { id, comment } = useRouter().query;

  return (
    <>
      <h1>User: {id}</h1>
      <p>comment: {comment}</p>
    </>
  );
};

export default Comment;
