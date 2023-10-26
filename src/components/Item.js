export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      {/* Checkbox for toggling item status (packed/unpacked) */}
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />

      {/* Display item quantity and description with styling based on packing status */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* Button to delete the item */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
