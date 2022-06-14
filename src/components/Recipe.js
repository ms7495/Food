import RecipeDetails from "./RecipeDetails";
import React, { useState } from "react"


const Recipe = ({recipe}) => {

    const API_KEY = ""; // ADD YOUR KEY
    const url= `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`; //second fetch link for recipe information

    const [show, setShow] = useState(false) //every recipe is closed on the start

    return(
        <div className="recipe">

            <img src={recipe.image} height="350rem"></img>
            <h2>{recipe.title}</h2>
            <button onClick={() => setShow(!show)}>Recipe</button>
            {show && <RecipeDetails sum={url}></RecipeDetails>}
        </div>
    )
}

export default Recipe;

