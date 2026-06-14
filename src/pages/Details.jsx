import { TacheForm } from "../components/TacheForm";

const Details = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] sm:text-[40px] leading-[1.1] font-semibold tracking-tight">
          Détails de la tâche
        </h1>
      </div>
      <div className="mt-10 max-w-xl">
          <TacheForm  />
      </div>
    </>
  );
};

export default Details;
