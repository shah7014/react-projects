import { useEffect, useState } from "react";
import MealSearch from "./components/MealSearch";
import MealsList from "./components/MealsList";
import * as mealsService from "./services/meals.service";

function App() {
  const [meals, setMeals] = useState([]);

  const [searchBy, setSearchBy] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const meals = await mealsService.serchMealsBy(searchBy);
      setIsLoading(false);
      setMeals(meals);
    };

    fetchMeals();
  }, [searchBy]);

  return (
    <div>
      <MealSearch onSearchTermChange={setSearchBy} />
      {isLoading && <p className="text-black text-lg px-8">Loading...</p>}
      {!isLoading && <MealsList meals={meals} />}
    </div>
  );
}

export default App;
