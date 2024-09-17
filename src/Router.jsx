import { EVENTS } from "./constants"
import { useState, useEffect } from "react"
import { match } from "path-to-regexp"

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, []) //El useEffect solo debe ejecutarse la primera vez
  
    let routeParams = {}

    const Page = routes.find(({ path }) => {
        if(path === currentPath) return true
        
        //Usamos path-to-regexp para poder detectar rutas dinámicas
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if(!matched) return false

        //Guardamos los parámetros de la URL que eran dinámicos y que extraemos con path-to-regexp
        routeParams = matched.params
        return true
    })?.Component
    return Page 
        ? <Page routeParams={routeParams}/> 
        : <DefaultComponent routeParams={routeParams}/>
  }