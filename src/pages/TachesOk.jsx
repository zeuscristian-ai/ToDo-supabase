import React from "react";
import Tache from "../components/Tache";

const TachesOK = () => {
  const taches = [
    {
      id: 1,
      titre: "Créer une vidéo marketing",
      description:
        "Développer une vidéo promotionnelle pour le lancement du nouveau produit, en mettant l'accent sur les principales caractéristiques et les avantages pour les clients.",
      status: true,
      created_at: "2023-08-15T10:30:00Z",
    },
    {
      id: 2,
      titre: "Mettre à jour le contenu du site web",
      description:
        "Réviser le contenu de la page d'accueil pour refléter les récents changements dans la gamme de produits et améliorer le SEO.",
      status: true,
      created_at: "2023-08-20T09:00:00Z",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[40px] leading-[1.1] font-semibold tracking-tight">
          Tâches terminées
        </h1>
        <p className="text-[21px] text-muted-foreground tracking-tight">
          Le travail accompli, rien que ça.
        </p>
      </div>
      <div>
        {taches ? (
          <ul className="mt-6 space-y-5">
            {taches.map((tache) => (
              <Tache tache={tache} key={tache.id} />
            ))}
          </ul>
        ) : (
          <p className="text-xl mt-8 ">Vous n'avez rien fait 😭 </p>
        )}
      </div>
    </>
  );
};

export default TachesOK;
