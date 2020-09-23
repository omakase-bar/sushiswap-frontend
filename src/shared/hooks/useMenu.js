import { useState } from "react";

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    change: () => setIsOpen(!isOpen),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

export default useMenu;
