import { Button } from "@/components/ui/button";
import { Edit, Trash, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

const Tache = ({ tache, onSupprimer, onBasculer }) => {
  const isOk = tache.status;
  const date = formatDistanceToNow(new Date(tache.created_at), {
    addSuffix: true,
    locale: fr,
  });
  return (
    <li
      className={cn(
        // Apple store-utility-card: white, hairline border, 18px radius, no shadow
        "flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 text-left max-w-xl transition-colors",
        isOk && "bg-secondary"
      )}
    >
      <div className="flex w-full flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-2 w-2 shrink-0 rounded-full",
              isOk ? "bg-muted-foreground/40" : "bg-primary"
            )}
          />
          <p
            className={cn(
              "text-[17px] font-semibold tracking-tight line-clamp-1",
              isOk && "line-through text-muted-foreground"
            )}
          >
            {tache.titre}
          </p>
          <span className="ml-auto shrink-0 text-[13px] text-muted-foreground line-clamp-1">
            {date}
          </span>
        </div>
      </div>

      <p
        className={cn(
          "line-clamp-2 text-[15px] leading-relaxed",
          isOk ? "text-muted-foreground line-through" : "text-foreground/80"
        )}
      >
        {tache.description}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant={isOk ? "default" : "outline"}
          size="sm"
          onClick={() => onBasculer?.(tache)}
          className="flex items-center gap-1.5"
        >
          <CheckCircle className="h-4 w-4" />
          {isOk ? "Reprendre" : "Terminée"}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1.5 text-muted-foreground"
        >
          <Edit className="h-4 w-4" />
          Modifier
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSupprimer?.(tache.id)}
          className="flex items-center gap-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash className="h-4 w-4" />
          Supprimer
        </Button>
      </div>
    </li>
  );
};

export default Tache;
