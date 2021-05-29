import { useEffect, useState } from "react";

export function useNetwork() {
  // state
  const [isOnline, setNetwork] = useState(window.navigator.onLine);

  //   update status
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  // check status
  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  //   return
  return isOnline;
}
