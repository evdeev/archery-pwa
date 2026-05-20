import { useState } from 'react';

import { EquipmentRepository } from '../../services/repositories/equipment.repository.js';

import { BottomSheetModal } from '../components/modals/BottomSheetModal.jsx';
import { EquipmentCard } from '../components/equipment/EquipmentCard.jsx';
import { EquipmentForm } from '../components/equipment/EquipmentForm.jsx';
import { useEquipmentHydration } from '../hooks/useEquipmentHydration.js';

const repository = new EquipmentRepository();

export function EquipmentScreen() {
  const { equipment, reload } = useEquipmentHydration();

  const [editing, setEditing] = useState(null);

  async function handleSave(item) {
    await repository.save(item);
    await reload();
    setEditing(null);
  }

  return (
    <section className="equipment-screen">
      <header className="segmented-control">
        <button className="active">Лук</button>
        <button>Стрелы</button>
      </header>

      <div className="equipment-list">
        {equipment.map(item => (
          <EquipmentCard
            key={item.id}
            item={item}
            onEdit={setEditing}
          />
        ))}
      </div>

      <button
        type="button"
        className="floating-add-button"
        onClick={() => setEditing({})}
      >
        +
      </button>

      {editing && (
        <BottomSheetModal
          title="Экипировка"
          onClose={() => setEditing(null)}
        >
          <EquipmentForm onSave={handleSave} />
        </BottomSheetModal>
      )}
    </section>
  );
}
