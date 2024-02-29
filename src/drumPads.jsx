import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const DrumPads = ({
  play,
  onDeactivePad,
  sound: { id, key, url, keyCode },
  kitTypeClicked,
  power,
}) => {
  const handlePadInteraction = useCallback(() => {
    play(key, id);
    if (onDeactivePad) {
        onDeactivePad(key);
    }
  }, [play, onDeactivePad, key, id]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        handlePadInteraction();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [key, id, play, onDeactivePad, handlePadInteraction]);

  return (
    <div
      className={`outer-drum-pad ${kitTypeClicked ? "kit-one" : "kit-two"} ${
        power ? "on" : "off"
      }`}
    >
      <button id={keyCode} className="drum-pad" onClick={handlePadInteraction}>
        <audio className="clip" src={url} id={key} />
        {key}
      </button>
    </div>
  );
};

DrumPads.propTypes = {
  play: PropTypes.func.isRequired,
  onDeactivePad: PropTypes.func.isRequired,
  sound: PropTypes.shape({
    id: PropTypes.string,
    key: PropTypes.string,
    url: PropTypes.string,
    keyCode: PropTypes.number,
  }).isRequired,
  kitTypeClicked: PropTypes.bool.isRequired,
  power: PropTypes.bool.isRequired,
};

export default DrumPads;
