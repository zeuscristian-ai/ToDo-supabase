import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_ANON_KEY as string;
import { Database } from "../../types/supabase.types";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
