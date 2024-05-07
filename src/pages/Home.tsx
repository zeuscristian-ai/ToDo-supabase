import Tache from "@/components/Taches";
import Taches from "@/components/Taches";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <h1 className="text-xl sm:text-3xl font-bold">Liste des Taches</h1>
        <Button className="h-10 capitalize font-bold space-x-1 px-2 sm:px-3">
          <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border px-1.5 font-bold text-xl  opacity-100 sm:flex">
            <span className="text-sm mt-1">⌘</span>A
          </kbd>
          <span className="hidden sm:block">créer une tache</span>
          <PlusCircleIcon className="h-6 w-6 block  sm:hidden" />
        </Button>
      </div>
      <div>
        {true ? (
          <ul className="h-screen mt-6">
            <Tache />
          </ul>
        ) : (
          <div className="space-y-2 mb-auto">
            <h2 className="text-xl font-regular mt-8">Pas de Taches 😭 </h2>
            <p className="text-sm">
              cliquez sur le bouton créer ou utilisez CTRL+A
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
