import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tabsbar from "@/components/Tabsbar";

export default function Inventory() {
  return (
    <main>
      <Tabsbar />
      <Link href={"/inventory/productColors"}>
      <Button>
        Color pro
      </Button>
      </Link>
    </main>
  );
}
