import { useEffect, useState } from "react";

const useAddress = () => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          setAddress(data.display_name);
        } catch (err) {
          setError("Failed to fetch address");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Location permission denied or unavailable");
        setLoading(false);
      }
    );
  }, []);

  return { address, loading, error };
};

export default useAddress;
