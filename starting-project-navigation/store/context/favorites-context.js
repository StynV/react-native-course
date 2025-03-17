import { createContext } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

export const FavoritesContextProvider = children => (
  <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
);
