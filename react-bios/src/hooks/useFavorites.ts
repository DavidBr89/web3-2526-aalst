import { useContext } from "react"
import { FavoritesContext } from "../contexts/FavoritesContext"


export const useFavorites = () => {

    const context = useContext(FavoritesContext);

    if(!context) {
        throw new Error("FavoritesContext can't be used without a FavoritesProvider")
    }

    return context;
}