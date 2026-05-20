import { describe, expect, it } from 'vitest';

import { calculateSessionTotals } from '../domain/session-engine/session-engine.js';

describe('session engine', () => {
  it('calculates session total', () => {
    const total = calculateSessionTotals([
      {
        series: [
          {
            shots: [
              { score: 10 },
              { score: 9 },
              { score: 8 }
            ]
          }
        ]
      }
    ]);

    expect(total).toBe(27);
  });
});
