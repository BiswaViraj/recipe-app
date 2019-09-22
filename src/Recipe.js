import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calorie, image, ingredients }) => {
    let count = 0;
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={count++}>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {Math.floor(calorie)}</p>
            <img src={image} alt="" className={style.image} />
        </div>
    );
};

export default Recipe;
