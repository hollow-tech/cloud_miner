import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return isLoaded;
};
