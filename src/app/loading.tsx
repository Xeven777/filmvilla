import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen pt-14 w-full border items-center justify-center">
      <Loader2 className="size-40 text-muted-foreground animate-spin ease-in-out" />
    </div>
  );
};

export default loading;
