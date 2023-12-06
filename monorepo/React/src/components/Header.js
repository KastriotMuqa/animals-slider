import SliderContext from "../context/SliderContext";
import { useContext } from "react";

export const Header = () => {
  const { state } = useContext(SliderContext);
  return <h1> Current step: {state?.data?.currentStep} </h1>;
};
