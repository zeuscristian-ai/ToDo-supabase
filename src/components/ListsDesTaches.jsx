import { useEffect, useState } from "react";
import Tache from "./Tache";
import { supabase } from "../supabase/supabaseClient";

const ListeDesTaches = () => {
  const [taches, setTaches] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const chargerTaches = async () => {
      const { data, error } = await supabase
        .from("taches")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setErreur(error.message);
      } else {
        setTaches(data);
      }
      setChargement(false);
    };

    chargerTaches();
  }, []);

  // Supprimer une tache de la base puis de l'affichage
  const supprimerTache = async (id) => {
    const { error } = await supabase.from("taches").delete().eq("id", id);
    if (error) {
      setErreur(error.message);
    } else {
      setTaches((actuelles) => actuelles.filter((t) => t.id !== id));
    }
  };

  // Marquer une tache comme terminee / non terminee
  const basculerStatut = async (tache) => {
    const nouveauStatut = !tache.status;
    const { error } = await supabase
      .from("taches")
      .update({ status: nouveauStatut })
      .eq("id", tache.id);
    if (error) {
      setErreur(error.message);
    } else {
      setTaches((actuelles) =>
        actuelles.map((t) =>
          t.id === tache.id ? { ...t, status: nouveauStatut } : t
        )
      );
    }
  };

  if (chargement) {
    return <p className="text-xl mt-8">Chargement... ⏳</p>;
  }

  if (erreur) {
    return <p className="text-xl mt-8 text-red-500">Erreur : {erreur}</p>;
  }

  return (
    <>
      {taches.length ? (
        <ul className="mt-6 space-y-5">
          {taches.map((tache) => (
            <Tache
              tache={tache}
              key={tache.id}
              onSupprimer={supprimerTache}
              onBasculer={basculerStatut}
            />
          ))}
        </ul>
      ) : (
        <p className="text-xl mt-8 ">Pas de Taches 😭 </p>
      )}
    </>
  );
};

export default ListeDesTaches;
