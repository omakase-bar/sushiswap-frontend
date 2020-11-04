import { useCallback, useContext } from "react";
import { Context } from "../contexts/ModalsContext";

const useModal = (modal, key, history) => {
  const { onDismiss, onPresent } = useContext(Context);
  const handlePresent = useCallback(() => {
    onPresent(modal, key, history);
  }, [key, modal, onPresent]);
  return [handlePresent, onDismiss];
};

export default useModal;
