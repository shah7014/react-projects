import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const AppContext = createContext({
  loading: false,
  setLoading: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  searchResults: [],
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("New");

  const [searchResults, setSearchResults] = useState([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fecthVideosByCategory = async () => {
      try {
        setLoading(true);
        const { items } = await fetchDataFromApi("/search", {
          q: selectedCategory,
        });
        console.log(items);
        setSearchResults(items);
      } catch (error) {
        console.log(error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    // fecthVideosByCategory();
  }, [selectedCategory]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        selectedCategory,
        setSelectedCategory,
        searchResults,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
