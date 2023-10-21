export default function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
    </li>
  );
}
