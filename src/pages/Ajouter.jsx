import { TacheForm } from "../components/TacheForm";

const Ajouter = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] sm:text-[40px] leading-[1.1] font-semibold tracking-tight">
          Ajouter une tâche
        </h1>
        <p className="text-[17px] sm:text-[21px] text-muted-foreground tracking-tight">
          Un titre, une description, et c'est noté.
        </p>
      </div>
      <div className="mt-10 max-w-xl">
        <TacheForm />
      </div>
    </>
  );
};

export default Ajouter;
