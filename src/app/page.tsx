import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-red-500 p-12">
      <h1 className="text-5xl">
        Welcome to
      </h1>
      <Button>shadcn button</Button>
      </div>
  );
}
