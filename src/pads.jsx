import DrumPads from "./drumPads";
import PropTypes from "prop-types";

const Pads = ({ sounds, play, power, onDeactivePad, kitTypeClicked }) => {
  return (
    <div className="pads">
      {power
        ? sounds.map((sound, index) => (
            <DrumPads
              key={index}
              sound={sound}
              play={play}
              onDeactivePad={onDeactivePad}
              kitTypeClicked={kitTypeClicked}
              power={power}
            />
          ))
        : sounds.map((sound, index) => (
            <DrumPads
              key={index}
              sound={{ ...sound, url: "#" }}
              play={play}
              onDeactivePad={onDeactivePad}
              kitTypeClicked={kitTypeClicked}
              power={power}
            />
          ))}
    </div>
  );
};

Pads.propTypes = {
  index: PropTypes.number,
  sounds: PropTypes.array.isRequired,
  play: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
  onDeactivePad: PropTypes.func.isRequired,
  kitTypeClicked: PropTypes.bool,
};

export default Pads;
