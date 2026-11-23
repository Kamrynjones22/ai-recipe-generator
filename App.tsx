import { useState } from "react";

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");

  const generateRecipe = () => {
    if (!ingredients.trim()) {
      setRecipe("Please enter some ingredients first.");
      return;
    }

    setRecipe(
      `Recipe Idea 🍽️\n\nUsing: ${ingredients}\n\n` +
      "1. Prepare and season your ingredients.\n" +
      "2. Cook them together over medium heat.\n" +
      "3. Add your favorite seasonings or sauce.\n" +
      "4. Serve warm and enjoy!"
    );
  };

  return (
    <div style={{
      fontFamily: "Arial",
      maxWidth: "700px",
      margin: "50px auto",
      padding: "25px"
    }}>
      <h1>🍳 AI Recipe Generator</h1>
      <p>Enter ingredients you have and generate a recipe idea.</p>

      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Example: chicken, rice, broccoli"
        style={{ width: "100%", minHeight: "100px", padding: "12px" }}
      />

      <button
        onClick={generateRecipe}
        style={{ marginTop: "15px", padding: "12px 20px" }}
      >
        Generate Recipe
      </button>

      {recipe && (
        <pre style={{ whiteSpace: "pre-wrap", marginTop: "30px" }}>
          {recipe}
        </pre>
      )}

      <p style={{ marginTop: "50px" }}>
        Created by Kamryn Jones
      </p>
    </div>
  );
}
