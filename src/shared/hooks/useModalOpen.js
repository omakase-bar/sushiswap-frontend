import { useState } from "react";

const useModalOpen = () => {
  const [isOpen, setIsOpen] = useState(true);
  return {
    isOpen,
    change: () => setIsOpen(!isOpen),
    show: () => setIsOpen(true),
    hide: () => setIsOpen(false),
  };
};

export default useModalOpen;
