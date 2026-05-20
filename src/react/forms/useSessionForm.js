import { useState } from 'react';

export function useSessionForm(initialState) {
  const [values, setValues] = useState(initialState);

  function setField(field, value) {
    setValues(current => ({
      ...current,
      [field]: value
    }));
  }

  return {
    values,
    setField
  };
}
