import { useState } from "react";

export default function Form({ onAddItems }) {
  // State variables to manage item description and quantity
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check if a description is provided; if not, return early
    if (!description) return;

    // Create a new item with the provided details
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Call the parent component's function to add the new item
    onAddItems(newItem);

    // Reset input fields after adding the item
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍 ?</h3>

      {/* Dropdown to select the quantity of items */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Input field for entering item description */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Submit button to add the item */}
      <button>Add</button>
    </form>
  );
}
