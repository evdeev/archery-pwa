import { useEffect, useState } from 'react';

const STORAGE_KEY = 'archery-pwa-onboarding-completed';

export function useOnboardingState() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem(STORAGE_KEY) === 'true');
  }, []);

  function completeOnboarding() {
    localStorage.setItem(STORAGE_KEY, 'true');
    setCompleted(true);
  }

  return {
    completed,
    completeOnboarding
  };
}
