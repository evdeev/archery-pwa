import { create } from 'zustand';

import { createEmptySession } from '../domain/session-engine/session-factory.js';
import { calculateSessionScore } from '../domain/session-engine/score-utils.js';

export const useSessionStore = create((set, get) => ({
  currentSession: createEmptySession(),

  setShot(roundIndex, seriesIndex, shotIndex, value) {
    const session = structuredClone(get().currentSession);

    session.rounds[roundIndex]
      .series[seriesIndex]
      .shots[shotIndex] = value;

    const result = calculateSessionScore(session);

    session.totalScore = result.total;
    session.xCount = result.xCount;
    session.tenCount = result.tenCount;

    set({ currentSession: session });
  }
}));
