import React from "react";
import { getRecipeFromMistral } from "./ai"
export default function Content() {
    const [currArr, setItems] = React.useState([]);

const ingredientsListItems = currArr.map((i, idx) => (
    <li key={`${i}-${idx}`}>{i}</li>
));

    function handleSubmit(data) {
     
        const newIngredient = data.get("ingredient");
        setItems(prevArr => [...prevArr, newIngredient]);
    }
    return (
        <div className="main"> 
         <form action={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {currArr.length>0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {currArr.length>3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </div>
    );
}
