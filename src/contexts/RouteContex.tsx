import React, { createContext } from "react";

type IRouteContext = {
 route: string;
 setRoute: (route: string) => void;
}
export const IRouteState: IRoute = {
 route: 'individual',
}
export const RouteContext = createContext<IRouteContext>(IRouteState);