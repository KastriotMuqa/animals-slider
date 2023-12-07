import "./App.css";
import { Header } from "./components/Header";
import { useReducer } from "react";
import SliderContext from "./context/SliderContext";
import { reducer } from "./reducer/SliderReducer";
import { Footer } from "./components/Footer";
import Slider from "./components/sliders/Slider";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: {
      currentStep: 1,
    },
  });
  return (
    <SliderContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header />
        <div className="app-body">
          <Slider />
        </div>
        <Footer />
      </div>
    </SliderContext.Provider>
  );
}

export default App;
