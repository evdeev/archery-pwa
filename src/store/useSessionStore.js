import { create } from 'zustand';

import { createEmptySession } from '../domain/session-engine/session-factory.js';
import { calculateSessionScore } from '../domain/session-engine/score-utils.js';
import {
  canEditShot,
  getFirstEmptyShotPosition,
  getNextShotPosition
} from '../domain/session-engine/sequential-input.js';

export const useSessionStore = create((set, get) => ({
  currentSession: createEmptySession(),
  sessions: [],
  selectedShot: {
    roundIndex: 0,
    seriesIndex: 0,
    shotIndex: 0
  },

  createSession(settings = {}) {
    const session = createEmptySession(settings);

    set({
      currentSession: session,
      selectedShot: getFirstEmptyShotPosition(session) ?? {
        roundIndex: 0,
        seriesIndex: 0,
        shotIndex: 0
      }
    });
  },

  setSessions(sessions) {
    set({ sessions });
  },

  setCurrentSession(session) {
    set({
      currentSession: session,
      selectedShot: getFirstEmptyShotPosition(session) ?? {
        roundIndex: 0,
        seriesIndex: 0,
        shotIndex: 0
      }
    });
  },

  setSelectedShot(position) {
    const session = get().currentSession;

    if (!canEditShot(session, position)) {
      const firstEmpty = getFirstEmptyShotPosition(session);

      set({ selectedShot: firstEmpty ?? get().selectedShot });
      return;
    }

    set({ selectedShot: position });
  },

  setShot(roundIndex, seriesIndex, shotIndex, value) {
    const position = { roundIndex, seriesIndex, shotIndex };
    const session = structuredClone(get().currentSession);

    if (!canEditShot(session, position)) {
      return;
    }

    session.rounds[roundIndex]
      .series[seriesIndex]
      .shots[shotIndex] = value;

    const result = calculateSessionScore(session);

    session.totalScore = result.total;
    session.xCount = result.xCount;
    session.tenCount = result.tenCount;
    session.updatedAt = new Date().toISOString();

    const nextShot = getNextShotPosition(session, position);

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

    session.updatedAt = new Date().toISOString();

    set({ currentSession: session });
  },

  setSessionNote(note) {
    const session = structuredClone(get().currentSession);

    session.note = note;
    session.updatedAt = new Date().toISOString();

    set({ currentSession: session });
  },

  updateSessionSettings(settings) {
    const session = structuredClone(get().currentSession);

    Object.assign(session, settings);
    session.updatedAt = new Date().toISOString();

    set({ currentSession: session });
  }
}));
