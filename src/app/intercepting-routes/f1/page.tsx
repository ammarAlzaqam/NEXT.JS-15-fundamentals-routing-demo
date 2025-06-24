import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>F1 page</h1>
      <h1><Link href="/intercepting-routes/f1/f2">F2</Link></h1>
      <h1><Link href="/intercepting-routes/f3">F3</Link></h1>
    </div>
  );
}
