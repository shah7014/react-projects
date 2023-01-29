export const serchMealsBy = async (searchText = "") => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchText
  );
  const data = await response.json();
  const mealsList = data.meals.slice(0, 15);
  return mealsList;
};
