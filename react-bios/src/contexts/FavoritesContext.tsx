// STAP 1: Aanmaken van een nieuwe context

import { createContext, useState, type PropsWithChildren } from "react";

interface FavoritesContextType {
  favorites: Film[];
  addFavorites: (item: Film) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);

// STAP 2: Provider maken voor deze context

const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Film[]>([]);

  const addFavorites = (item: Film) => {
    if (favorites.some((f) => f.id === item.id)) {
      setFavorites(favorites.filter((fi) => fi.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
