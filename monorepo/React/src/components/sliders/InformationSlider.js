import { useContext, useEffect, useState } from "react";
import SliderContext from "../../context/SliderContext";
import { useNavigate } from "react-router-dom";
import { birds } from "../../constants/birdsDetails";

export const InformationSlider = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(SliderContext);
  const [bird, setBird] = useState({});

  useEffect(() => {
    if (!state?.data?.item) {
      navigate("/step1");
    } else {
      // eslint-disable-next-line
      const bird = birds.find((x) => x.id == state.data.item.id);
      setBird(bird);
    }
  }, [navigate, state.data]);

  const onClickHandler = () => {
    dispatch({
      type: "CLEAR_SLIDER",
    });
  };

  return (
    <div className="information-slider">
      <div className="bird-info">
        <div className="bird-info-header">
          <h2>{bird.name}</h2>
          {bird.image && <img src={bird.image} alt={bird.name} />}
        </div>
        <div className="bird-info-details">
          <p>
            <strong>Description:</strong> {bird.description}
          </p>
          <p>
            <strong>Habitat:</strong> {bird.habitat}
          </p>
          <p>
            <strong>Diet:</strong> {bird.diet}
          </p>
          <p>
            <strong>Lifespan:</strong> {bird.lifespan}
          </p>
          <p>
            <strong>Interesting Fact:</strong> {bird.interestingFact}
          </p>
        </div>
      </div>

      <button onClick={onClickHandler}>Go back</button>
    </div>
  );
};
