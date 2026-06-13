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
            <Tache tache={tache} key={tache.id} />
          ))}
        </ul>
      ) : (
        <p className="text-xl mt-8 ">Pas de Taches 😭 </p>
      )}
    </>
  );
};

export default ListeDesTaches;
