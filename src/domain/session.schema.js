export const SessionSchema = {
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',

  type: 'training | competition',

  distanceMeters: 'number',
  target: 'string',

  arrowsPerSeries: 'number',
  totalShots: 'number',

  bowSetupId: 'string | null',
  arrowSetupId: 'string | null',

  rounds: 'Round[]',

  totalScore: 'number',
  possibleScore: 'number',

  xCount: 'number',
  tenCount: 'number',

  note: 'string'
};
