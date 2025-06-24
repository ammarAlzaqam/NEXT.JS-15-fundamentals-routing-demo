import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Notifications
      <span className="m-1">-</span>
      <h1>
        <Link className="text-blue-400" href="/complex-dashboard/archived">Archived</Link>
      </h1>
    </Card>
  );
}
