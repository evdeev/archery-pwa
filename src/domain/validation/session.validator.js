import { z } from 'zod';

export const SessionValidator = z.object({
  id: z.string(),
  distanceMeters: z.number(),
  totalScore: z.number(),
  possibleScore: z.number()
});
