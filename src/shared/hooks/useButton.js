import { useState } from "react";

const useButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  return {
    isLoading,
    change: () => setIsLoading(!isLoading),
    load: () => setIsLoading(true),
    pause: () => setIsLoading(false),
  };
};

export default useButton;
