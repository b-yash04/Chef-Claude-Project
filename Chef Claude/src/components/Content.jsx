import React from "react";

export default function Content() {
    const [currArr, setItems] = React.useState([]);

const ingredientsListItems = currArr.map((i, idx) => (
    <li key={`${i}-${idx}`}>{i}</li>
));

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setItems(prevArr => [...prevArr, newIngredient]);
    }
    return (
        <div className="main">  <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </div>
    );
}
