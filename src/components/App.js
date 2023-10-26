import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // State to manage the list of items
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Function to delete an item from the list
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Function to toggle the 'packed' status of an item
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Function to clear the entire list with user confirmation
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      {/* Display the app logo */}
      <Logo />

      {/* Form component for adding new items */}
      <Form onAddItems={handleAddItems} />

      {/* PackingList component to display and manage the list of items */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />

      {/* Stats component to display statistics about the list */}
      <Stats items={items} />
    </div>
  );
}
