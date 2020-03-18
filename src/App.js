import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

require("dotenv").config();
console.log(process.env.REACT_APP_ID);
function App() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
            );
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
        };
        getRecipes();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input
                    type="text"
                    className="search-bar"
                    value={search}
                    placeholder="Search tasty recipes"
                    onChange={updateSearch}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients}
                        calorie={recipe.recipe.calories}
                        image={recipe.recipe.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
