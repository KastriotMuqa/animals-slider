import { createContext } from "react";

const SliderContext = createContext({
  data: {
    currentStep: 1,
  },
});

export default SliderContext;
