import { useState, useCallback, useMemo, useEffect } from "react";
import DrumController from "./drumController";
import Pads from "./pads";
import "./drum.css";

const firstSoundClips = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const secondSoundClips = [
  {
    keyCode: 81,
    key: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const kitName = {
  firstKit: "Heater Kit",
  secondKit: "Smooth Piano Kit",
};

const kitSound = {
  firstKit: firstSoundClips,
  secondKit: secondSoundClips,
};

const DrumMachine = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [displayName, setDisplayName] = useState("");
  const [kitType, setKitType] = useState("firstKit");
  const [sounds, setSounds] = useState(kitSound[kitType]);
  const [kitTypeClicked, setKitTypeClicked] = useState(false);

  const onActivePad = useMemo(
    () => (pad) => {
      if (pad.parentElement) {
        pad.parentElement.classList.add("active-pad");
        pad.parentElement.classList.remove("inactive-pad");
        pad.parentElement.classList.toggle("style-one", kitType === "firstKit");
        pad.parentElement.classList.toggle(
          "style-two",
          kitType === "secondKit"
        );
      }
    },
    [kitType]
  );

  const onDeactivePad = useMemo(
    () => (pad) => {
      if (pad && pad.parentElement) {
        pad.parentElement.classList.add("inactive-pad");
        pad.parentElement.classList.remove("active-pad");
        pad.parentElement.classList.remove("style-one");
        pad.parentElement.classList.remove("style-two");
        setTimeout(() => {
          pad.parentElement.classList.remove("active-pad");
          pad.parentElement.classList.add("inactive-pad");
        }, 100);
      }
    },
    []
  );

  useEffect(() => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key));
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  }, [sounds, volume]);

  const play = useCallback(
    (key, sound) => {
      setDisplayName(sound);
      const pad = document.getElementById(key);
      onActivePad(pad);
      pad.currentTime = 0;
      pad.play();
      setTimeout(() => {
        onDeactivePad(pad);
      }, 100);
    },
    [onActivePad, onDeactivePad]
  );

  const stop = () => {
    setPower(!power);
    setDisplayName(power ? "Turning Off" : "Welcome");
  };

  const changekitSound = () => {
    setDisplayName("");
    if (kitType === "firstKit") {
      setKitType("secondKit");
      setSounds(kitSound.secondKit);
    } else {
      setKitType("firstKit");
      setSounds(kitSound.firstKit);
    }
    setKitTypeClicked((prevKitTypeClicked) => !prevKitTypeClicked);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    setDisplayName(Math.floor(e.target.value * 100) + "%");
  };

  const setKeyVolume = useCallback(() => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key));
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  }, [sounds, volume]);

  return (
    <div className="container mx-auto">
      <div id="drum-machine" className="drum-machine">
        {power && setKeyVolume()}
        <Pads
          sounds={sounds}
          play={play}
          power={power}
          onDeactivePad={onDeactivePad}
          kitTypeClicked={kitTypeClicked}
        />
        <DrumController
          stop={stop}
          power={power}
          volume={volume}
          name={displayName || kitName[kitType]}
          changekitSound={changekitSound}
          handleVolumeChange={handleVolumeChange}
          kitTypeClicked={kitTypeClicked}
        />
      </div>
    </div>
  );
};

export default DrumMachine;
