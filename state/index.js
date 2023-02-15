import React, { createContext, useContext, useState } from "react";
import { DATABASE } from "@/db";

const AppContext = createContext();

export default function StateProvider({ children }) {
  const [state, setState] = React.useState({
    name: "",
    score: 0,
    generatingResults: false,
    presentQuestion: -1,
    cache: {
      name: '',
      score: null
    },
  });
  return (
    <AppContext.Provider value={{ state, setState, DATABASE }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalState() {
  const state = useContext(AppContext);
  return state;
}
