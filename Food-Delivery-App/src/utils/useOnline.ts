import { useEffect, useState } from "react";

export default function useOnline(): boolean {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    addEventListener("online", handleOnline);
    addEventListener("offline", handleOffline);

    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  });
  return isOnline;
}
