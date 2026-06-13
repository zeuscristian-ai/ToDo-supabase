"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { supabase } from "../supabase/supabaseClient";

export function TacheForm({ defaultValues = {} }) {
  // Use defaultValues from props if provided
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues, // Set default values for the form
  });

  const navigate = useNavigate();
  const [enregistrement, setEnregistrement] = useState(false);
  const [erreur, setErreur] = useState(null);

  const onSubmit = async (data) => {
    setEnregistrement(true);
    setErreur(null);

    const { error } = await supabase.from("taches").insert([
      {
        titre: data.titre,
        description: data.description,
      },
    ]);

    setEnregistrement(false);

    if (error) {
      setErreur(error.message);
    } else {
      navigate("/"); // Retour a l'accueil apres l'ajout
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="titre" className="block  font-medium text-foreground">
          Titre
        </label>
        <Input id="titre" {...register("titre", { required: true })} />
        {errors.titre && (
          <span className="text-red-500">Veillez entrer un titre</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block  font-medium text-foreground"
        >
          Description
        </label>
        <Textarea
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">Veillez entrer une description</span>
        )}
      </div>

      {erreur && <p className="text-red-500">Erreur : {erreur}</p>}

      <Button type="submit" disabled={enregistrement}>
        {enregistrement ? "Ajout en cours..." : "Ajouter une tâche"}
      </Button>
    </form>
  );
}
