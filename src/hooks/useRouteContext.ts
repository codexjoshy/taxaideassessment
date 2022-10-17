import { useContext } from 'react'
import { RouteContext } from '../contexts/RouteContex'

export function useRouteContext() {
  return useContext(RouteContext)
}
