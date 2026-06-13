import React from "react";
import ListeDesTaches from "../components/ListsDesTaches";

const Accueil = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[40px] leading-[1.1] font-semibold tracking-tight">
          Liste des tâches
        </h1>
        <p className="text-[21px] text-muted-foreground tracking-tight">
          Tout ce que vous avez à faire, au même endroit.
        </p>
      </div>
      <ListeDesTaches />
    </div>
  );
};

export default Accueil;
