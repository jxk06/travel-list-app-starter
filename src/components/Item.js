import { useState } from "react";

export default function Item({
  item,
  onToggleItem,
  onDeleteItem,
  onEditItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(item.description);
  const [newQty, setNewQty] = useState(item.quantity);

  function handleSave() {
    onEditItem({
      ...item,
      description: newDesc,
      quantity: Number(newQty),
    });

    setIsEditing(false);
  }

  return (
    <li>
      {/* EDIT MODE */}
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />

          <input
            type="number"
            min="1"
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
          />

          <button onClick={handleSave}>💾 Save</button>
          <button onClick={() => setIsEditing(false)}>✖ Cancel</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onToggleItem(item.id)}
          />

          <span
            onClick={() => setIsEditing(true)}
            style={{
              textDecoration: item.packed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {item.quantity} × {item.description}
          </span>

          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </>
      )}
    </li>
  );
}
