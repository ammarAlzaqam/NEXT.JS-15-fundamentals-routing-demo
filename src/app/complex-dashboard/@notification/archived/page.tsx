import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsArchived() {
  return (
    <Card>
      <h1>Notifications Archived</h1>
      <span className="m-1">-</span>
      <Link className="text-blue-400" href="/complex-dashboard">Default</Link>
    </Card>
  );
}
