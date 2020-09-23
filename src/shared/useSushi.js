import { useContext } from "react";
import { Context } from "../context/SushiContext";

const useSushi = () => {
  const { sushi } = useContext(Context);
  return sushi;
};

export default useSushi;
