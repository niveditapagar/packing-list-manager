export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed).length;
  const percentPacked = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You've got everything! You're ready to go ✈️"
          : `💼 You have ${numItems} items in your list, and you have already packed
            ${numPackedItems} (${percentPacked ? percentPacked : 0}%)`}
      </em>
    </footer>
  );
}
