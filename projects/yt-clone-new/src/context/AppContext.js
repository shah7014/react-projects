import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("New");

  const [searhcResults, setSearhcResults] = useState([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fecthVideosByCategory = async () => {
      setLoading(true);
      const response = await fetchDataFromApi(`search/?q=${selectedCategory}`);
      const contents = response.contents;
      console.log(contents);
      setLoading(false);
      setSearhcResults(contents);
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
        searhcResults,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
