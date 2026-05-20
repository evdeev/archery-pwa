import { create } from 'zustand';

export const useAppStore = create(set => ({
  activeSessionId: null,
  sessions: [],

  setActiveSession(sessionId) {
    set({ activeSessionId: sessionId });
  },

  setSessions(sessions) {
    set({ sessions });
  }
}));
