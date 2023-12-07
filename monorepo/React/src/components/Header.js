import SliderContext from "../context/SliderContext";
import { useContext } from "react";

export const Header = () => {
  const { state } = useContext(SliderContext);
  return (
    <div className="page-header">
      <h1> Current step: {state?.data?.currentStep} </h1>
  </div>)
};
