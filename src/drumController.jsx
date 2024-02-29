import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const DrumController = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changekitSound,
}) => {
  const [kitTypeClicked, setKitTypeClicked] = useState(false);

  const handleKitTypeClick = useCallback(() => {
    setKitTypeClicked((prevKitTypeClicked) => !prevKitTypeClicked);
    changekitSound();
  }, [changekitSound]);

  const generateSpeakers = () => {
    const speakerClasses = power
      ? kitTypeClicked
        ? "activeSpeaker one"
        : "activeSpeaker two"
      : kitTypeClicked
      ? "activeSpeaker one off"
      : "activeSpeaker two off";

    return Array.from({ length: 5 }, (_, index) => (
      <hr key={index} className={speakerClasses} />
    ));
  };

  return (
    <div className="drum-controller">
      <div className="label">Drum Machine</div>
      <div
        id="display"
        className={`display ${power ? "displayOn" : "displayOff"}`}
      >
        <h6>{name}</h6>
      </div>
      <div className="flex flex-col items-center">
        <h6>Power</h6>
        {power ? (
          <button onClick={stop} className="activeButton">
            ON
          </button>
        ) : (
          <button onClick={stop} className="inactiveButton">
            OFF
          </button>
        )}
      </div>
      <div>
        <h6>Volume</h6>
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={+volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className={power ? "kit-type" : "kit-type-off"}>
        <button
          onClick={power ? handleKitTypeClick : null}
          className={kitTypeClicked ? "kit-type-first" : "kit-type-second"}
          disabled={!power}
        >
          {kitTypeClicked ? "Kit 1" : "Kit 2"}
        </button>
      </div>
      <div className="speakers">{generateSpeakers()}</div>
    </div>
  );
};

DrumController.propTypes = {
  stop: PropTypes.func,
  name: PropTypes.string,
  power: PropTypes.bool,
  volume: PropTypes.number,
  handleVolumeChange: PropTypes.func,
  changekitSound: PropTypes.func,
  kit: PropTypes.number,
};

export default DrumController;
