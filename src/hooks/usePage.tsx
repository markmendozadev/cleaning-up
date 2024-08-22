import { FallbackContext, FallbackType } from "@/context/fallback-provider";
import * as React from "react";

export const usePage = () => {
  const { updateFallback } = React.useContext(FallbackContext);

  const onLoad = React.useCallback(
    (component: FallbackType | undefined) => {
      if (component === undefined) component = null;
      updateFallback(component);
    },
    [updateFallback]
  );

  return { onLoad };
};
