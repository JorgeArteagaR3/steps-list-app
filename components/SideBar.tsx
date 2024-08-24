import Link from "next/link";
import { Button } from "./ui/button";

export default function SideBar() {
  return (
    <aside className="min-h-screen border-r px-10 flex flex-col py-4 items-center">
      <Link href={"/"} className="font-bold mb-20">
        Logo
      </Link>
      <nav>
        <ul>
          <Button asChild>
            <Link href={"/steps"}>Pasos</Link>
          </Button>
        </ul>
      </nav>
    </aside>
  );
}
