import React from "react";
import Card from "./Card";

const MealsList = (props) => {
  return (
    <div className="max-w-[1280px] mx-auto py-12 px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {props.meals.map((m) => (
        <Card img={m.strMealThumb} name={m.strMeal} key={m.idMeal} />
      ))}
    </div>
  );
};

export default MealsList;
