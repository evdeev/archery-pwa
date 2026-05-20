import { useEffect, useState } from 'react';

import { EquipmentRepository } from '../../services/repositories/equipment.repository.js';

const repository = new EquipmentRepository();

export function useEquipmentHydration() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    async function load() {
      const items = await repository.getAll();
      setEquipment(items);
    }

    load();
  }, []);

  return {
    equipment,
    async reload() {
      const items = await repository.getAll();
      setEquipment(items);
    }
  };
}
