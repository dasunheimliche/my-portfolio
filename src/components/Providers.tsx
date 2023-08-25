"use client";

import { Dispatch, createContext, useState } from "react";

interface AppContext {
  isScrollUp: boolean;
  setIsScrollUp: Dispatch<boolean>;
}

export const AppContext = createContext<AppContext>({
  isScrollUp: false,
  setIsScrollUp: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isScrollUp, setIsScrollUp }}>
      {children}
    </AppContext.Provider>
  );
}
