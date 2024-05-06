import { Database } from "./supabase.types";

export type SmoothieType = Database["public"]["Tables"]["smoothies"]["Row"];

export type TodosType = {
  id: number;
  content: string;
  completed?: boolean | null;
};
