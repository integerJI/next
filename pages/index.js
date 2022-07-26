import Link from "next/link";

const index = () => (
  <>
    <h1>hello world</h1>
    {/* react-router-dom과 다른 점은 Link 자체가 하나의 a 태그를 생성해주는 것이 아닌, Link는 a 태그에 props만 추가적으로 부여해준다는 것이다. */}
    <Link href="/hello">
        <a title="hello">Hello Page</a>
    </Link>
  </>
);

export default index;
