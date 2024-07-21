import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tabsbar from "@/components/Tabsbar";

export default function Inventory() {
  return (
    <main>
      <h1>Hello Inventory</h1>
      <Link href={"inventory/productColors"}>
      <Button>
        Product Colors
      </Button>
      </Link>
      <Tabsbar />
    </main>
  );
}
