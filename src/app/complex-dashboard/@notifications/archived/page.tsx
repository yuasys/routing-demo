import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return( 
    <Card>
      <div>
        <h1>ArchivedNotifications</h1>
      </div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
    );
}