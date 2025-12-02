import Item from "./Item";

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearPacked,
  onEditItem,
}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          />
        ))}
      </ul>

      <button onClick={onClearPacked}>Clear Packed Items</button>
    </div>
  );
}
