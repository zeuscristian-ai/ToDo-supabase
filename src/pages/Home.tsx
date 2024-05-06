import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl sm:text-5xl font-bold">Liste des Taches</h1>
        <Button className="h-10 capitalize font-bold space-x-1 px-2 sm:px-3">
          <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border px-1.5 font-mono text-[12px] font-medium opacity-100 sm:flex">
            <span className="text-xl">⌘</span>A
          </kbd>
          <span className="hidden sm:block">créer une tache</span>
          <PlusCircleIcon className="h-6 w-6 block  sm:hidden" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
