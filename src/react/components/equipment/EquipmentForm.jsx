import { useState } from 'react';

export function EquipmentForm({ onSave }) {
  const [name, setName] = useState('');
  const [drawWeight, setDrawWeight] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      id: crypto.randomUUID(),
      name,
      drawWeight: Number(drawWeight)
    });

    setName('');
    setDrawWeight('');
  }

  return (
    <form className="equipment-form" onSubmit={handleSubmit}>
      <input
        value={name}
        placeholder="Название"
        onChange={event => setName(event.target.value)}
      />

      <input
        value={drawWeight}
        placeholder="Фунтаж"
        type="number"
        onChange={event => setDrawWeight(event.target.value)}
      />

      <button type="submit">
        Сохранить
      </button>
    </form>
  );
}
