import Link from "next/link";

function Courses() {
  return (
    <>
      <h1>Courses</h1>

      {/* بدل <a> استخدم <Link> */}
      <Link href="/components/Courses/data">
        Lessone
      </Link>
    </>
  );
}

export default Courses;