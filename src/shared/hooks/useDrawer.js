import { useState } from 'react';

const useDrawer = () => {
  const [isOpen, setDrawer] = useState(false);
  return {
    isOpen,
    open: () => setDrawer(true),
    close: () => setDrawer(false),
  };
};

export default useDrawer;
