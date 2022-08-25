import { useState } from "react";

const useTrackLocation = () => {
  const [locationErrorMessage, setLocationErrorMessage] = useState<string>("");
  const [latLong, setLatLong] = useState<string>("");
  const [isFindingLocation, setIsFindingLocation] = useState<boolean>(false);
  const success = (position: GeolocationPosition) => {
    const latiude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latiude},${longitude}`);
    setLocationErrorMessage("");
    setIsFindingLocation(false);
  };
  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMessage("Unable to retrieve your location");
  };
  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setLocationErrorMessage("this feature is not supported by your browser");
      setIsFindingLocation(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    latLong,
    handleTrackLocation,
    locationErrorMessage,
    isFindingLocation,
  };
};

export default useTrackLocation;
