import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React from "react";

import { SmoothieType } from "types/collections";

type Props = {
  smoothie: SmoothieType;
};

const Smoothie: React.FC<Props> = ({ smoothie }) => {
  return (
    <Alert>
      <AlertTitle>{smoothie.title}</AlertTitle>
      <AlertDescription>{smoothie.method}</AlertDescription>
    </Alert>
  );
};

export default Smoothie;
