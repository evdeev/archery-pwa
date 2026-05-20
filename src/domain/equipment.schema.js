export const BowSetupSchema = {
  id: 'string',
  name: 'string',
  class: 'barebow | olympic | compound',
  drawWeight: 'number',
  lengthInches: 'number'
};

export const ArrowSetupSchema = {
  id: 'string',
  name: 'string',
  spine: 'number',
  lengthInches: 'number',
  pointWeight: 'number'
};
