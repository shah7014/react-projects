import { createContext, useContext, useEffect, useState } from "react";
import * as mealsService from "../services/meals.service";

export const AppContext = createContext({
  meals: [],
  favorites: [],
  isLoading: false,
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  setSearchTerm: () => {},
  getRandomMeal: () => {},
});

export const AppContextProvider = (props) => {
  // state of meals
  const [meals, setMeals] = useState([]);

  // search term state
  const [searchTerm, setSearchTerm] = useState("");

  // state of isLoading
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to get meals on search term
  const fetchMeals = async (term) => {
    setIsLoading(true);
    const data = await mealsService.searchMealsBy(term);
    setIsLoading(false);

    setMeals(data);
  };

  const getRandomMeal = async () => {
    const data = await mealsService.getRandomMeal();
    setMeals(data);
  };

  // 2 useEffect to handle bug when we click on surprise me and change searchTerm state to ""
  // at that time we don't want useEffect to run
  // but initially when searchTerm is empty it shoudl run
  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    fetchMeals(searchTerm);
  }, [searchTerm]);

  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (newItem) => {
    setFavorites((prev) => [...prev, newItem]);
  };

  const removeFromFavorites = (itemToBeRemoved) => {
    setFavorites((prev) =>
      prev.filter((m) => m.idMeal !== itemToBeRemoved.idMeal)
    );
  };

  const context = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    meals,
    isLoading,
    setSearchTerm,
    getRandomMeal,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  return context;
};
