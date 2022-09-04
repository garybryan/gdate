import { useEffect, useState } from 'react';

export function useFakeLoading(delay = 2000): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), delay);
  }, [setIsLoading, delay]);

  return isLoading;
}
