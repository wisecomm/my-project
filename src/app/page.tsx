import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-deepblue container">
      <h1 className="text-5xl font-bold text-white">Welcome to</h1>
      <Button className="bg-amber border-4 text-2xl font-bold mt-12 rounded px-6">
        shadcn button
      </Button>
      <Input
        type="text"
        placeholder="Enter your name"
        className="bg-white text-lg text-amber boarder-2 p-4 rounded ml-4 outline-0 mt-4"
      />

      <div className="flex flex-1 items-center justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
