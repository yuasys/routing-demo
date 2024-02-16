import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return( 
    <Card>
      <div>
        <h1>Notifications</h1>
      </div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
    );
}