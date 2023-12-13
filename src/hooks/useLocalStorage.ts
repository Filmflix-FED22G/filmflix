import { useEffect, useState } from 'react';

// Loads data from local storage if key exists, otherwise creates key with initialData
export function useLocalStorage<State>(initialState: State, key: string) {
  const [state, setState] = useState<State>(() => {
    // If key exists, gather data
    const lsState = localStorage.getItem(key);
    if (lsState) {
      return JSON.parse(lsState);
    }
    // Creates new key with initial values
    return initialState;
  });

  // Define an effect to update the Local Storage data whenever the "state" variable changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState] as const;
}
