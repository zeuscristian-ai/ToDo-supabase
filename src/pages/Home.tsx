import Smoothie from "@/components/Smoothie";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";
import { SmoothieType } from "types/collections";

const Home = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [smoothies, setSmothies] = useState<SmoothieType[]>([]);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select("*");
      if (error) {
        setFetchError("impossible de charger les données");
        setFetchError(null);
        console.log(error);
      }
      if (data) {
        console.log(data);

        setSmothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div>
          {smoothies.map((smoothie) => {
            return <Smoothie smoothie={smoothie} key={smoothie.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
