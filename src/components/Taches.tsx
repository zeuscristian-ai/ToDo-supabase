import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";

const Tache = () => {
  return (
    <li>
      <button
        className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
        spellCheck="false"
      >
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="font-semibold">Emily Davis</div>
              <span className="flex h-2 w-2 rounded-full bg-green-600" />
            </div>
            <div className="ml-auto text-xs text-muted-foreground">
              about 1 year ago
            </div>
          </div>
        </div>
        <div className="line-clamp-2 line-through text-sm text-muted-foreground">
          I have a question about the budget for the upcoming project. It seems
          like there's a discrepancy in the allocation of resources.
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
            work
          </div>
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            budget
          </div>
        </div>
      </button>
    </li>
  );
};

export default Tache;
