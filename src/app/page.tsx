import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="bg-red-500 p-12">
      <h1 className="text-5xl">Welcome to</h1>
      <Button>shadcn button</Button>
      <div className="flex flex-1 items-center justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
