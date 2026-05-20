import { create } from 'zustand';

export const useEquipmentStore = create(set => ({
  bows: [],
  arrows: [],

  addBow(bow) {
    set(state => ({
      bows: [...state.bows, bow]
    }));
  },

  addArrowSet(arrowSet) {
    set(state => ({
      arrows: [...state.arrows, arrowSet]
    }));
  }
}));
