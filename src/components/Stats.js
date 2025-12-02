export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your list ✈️</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (percentage === 100) {
    return (
      <footer className="stats">
        <em>You got everything! 🎉</em>
      </footer>
    );
  }


  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list. You already packed {numPacked} (
        {percentage}%).
      </em>
    </footer>
  );
}
