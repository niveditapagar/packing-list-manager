export default function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip 😍 ?</h3>
      <select>
        <option value={1} key={1}>
          {1}
        </option>
        <option value={2} key={2}>
          {2}
        </option>
        <option value={3} key={3}>
          {3}
        </option>
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}
