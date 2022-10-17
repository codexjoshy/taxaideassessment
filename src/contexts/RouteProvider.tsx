import React, { useState } from "react";
import { RouteContext } from "./RouteContex";

export function RouteProvider({ children }: { children: React.ReactNode }) {
 const [route, setRoute] = useState('individual')

 return (
  <RouteContext.Provider value={{ route, setRoute }}>
   {children}
  </RouteContext.Provider>
 );
}