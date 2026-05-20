import { create } from 'zustand';

import { createEmptySession } from '../domain/session-engine/session-factory.js';
import { calculateSessionScore } from '../domain/session-engine/score-utils.js';
import { getNextShotPosition } from '../domain/session-engine/sequential-input.js';

export const useSessionStore = create((set, get) => ({
  currentSession: createEmptySession(),

  selectedShot: {
    roundIndex: 0,
    seriesIndex: 0,
    shotIndex: 0
  },

  setSelectedShot(position) {
    set({ selectedShot: position });
  },

  setShot(roundIndex, seriesIndex, shotIndex, value) {
    const session = structuredClone(get().currentSession);

    session.rounds[roundIndex]
      .series[seriesIndex]
      .shots[shotIndex] = value;

    const result = calculateSessionScore(session);

    session.totalScore = result.total;
    session.xCount = result.xCount;
    session.tenCount = result.tenCount;

    const nextShot = getNextShotPosition(session, {
      roundIndex,
      seriesIndex,
      shotIndex
    });

    set({
      currentSession: session,
      selectedShot: nextShot
    });
  },

  setSeriesComment(roundIndex, seriesIndex, comment) {
    const session = structuredClone(get().currentSession);

    session.rounds[roundIndex]
      .series[seriesIndex]
      .comment = comment;

    set({ currentSession: session });
  },

  updateSessionSettings(settings) {
    const session = structuredClone(get().currentSession);

    Object.assign(session, settings);

    set({ currentSession: session });
  }
}));
