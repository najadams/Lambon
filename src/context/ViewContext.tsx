"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "experience" | "grid";

interface ViewContextType {
  viewMode: ViewMode;
  toggleView: () => void;
  setViewMode: (mode: ViewMode) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>("experience");

  const toggleView = () => {
    setViewModeState((prev) => (prev === "experience" ? "grid" : "experience"));
  };

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
  };

  return (
    <ViewContext.Provider value={{ viewMode, toggleView, setViewMode }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
};
