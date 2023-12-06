import { useContext } from "react";
import { items } from "../../constants/birdsList";
import SliderContext from "../../context/SliderContext";
import { useNavigate } from "react-router-dom";

export const AnimalsSlider = () => {
  // it's meant to be fetched from external apis
  const listOfItems = items;

  const navigate = useNavigate();

  const { dispatch } = useContext(SliderContext);

  const onclickHandler = (id) => {
    // eslint-disable-next-line
    const item = listOfItems.find((x) => x.id == id);
    if (!item) {
      throw new Error("Invalid element selected");
    }

    dispatch({
      type: "UPDATE_SLIDER",
      payload: {
        currentStep: "2",
        item: item,
      },
    });

    navigate("/step2");
  };

  return (
    <div>
      {listOfItems.map((x) => (
        <ItemRender
          id={x.id}
          item={x.item}
          image={x.image}
          key={x.id}
          onclickHandler={onclickHandler}
        />
      ))}
    </div>
  );
};

const ItemRender = ({ id, item, image, onclickHandler }) => {
  return (
    <div id={id} className="element-container">
      <div className="image-container">
        <img src={image} alt={item} />
      </div>
      <p>{item}</p>
      <button
        onClick={() => {
          onclickHandler(id);
        }}
      >
        {" > "}
      </button>
    </div>
  );
};
