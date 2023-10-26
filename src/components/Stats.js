export default function Stats({ items }) {
  // Check if the packing list is empty
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );

  // Calculate the total number of items, packed items, and the percentage packed
  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed).length;
  const percentPacked = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {/* Display different messages based on the packing progress */}
        {percentPacked === 100
          ? "You've got everything! You're ready to go ✈️"
          : `💼 You have ${numItems} items in your list, and you have already packed
            ${numPackedItems} (${percentPacked ? percentPacked : 0}%)`}
      </em>
    </footer>
  );
}
