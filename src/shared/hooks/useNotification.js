import { useState } from "react";

const useNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    change: () => setIsOpen(!isOpen),
    show: () => setIsOpen(true),
    hide: () => setIsOpen(false),
  };
};

export default useNotification;
