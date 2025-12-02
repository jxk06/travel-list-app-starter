import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearPacked() {
    setItems(items.filter((item) => !item.packed));
  }

  function handleEditItem(updatedItem) {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />

      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearPacked={handleClearPacked}
        onEditItem={handleEditItem}
      />

      <Stats items={items} />
    </div>
  );
}


