import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
const SpechTranslator = ({ quote }) => {
  const [voices, setVoices] = useState();
  const [loading, setLoading] = useState(false);
  const [speechBot, setSpeechBot] = useState({
    voz: "",
    pitch: 1,
    rate: 1
  });

  const synth = window.speechSynthesis;
  const getVoices = () => {
    setLoading(false);
    const synthVoices = synth.getVoices();
    setVoices(synthVoices);
    setLoading(true);
  };
  useEffect(() => {
    getVoices();
  }, []);

  const handleClick = e => {
    e.preventDefault();
    let utterThis = new SpeechSynthesisUtterance(quote);
    let selectedOption = speechBot.voz;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = speechBot.pitch;
    utterThis.rate = speechBot.rate;
    synth.speak(utterThis);
  };
  const handleChange = e => {
    setSpeechBot({ ...speechBot, [e.target.id]: e.target.value });
  };

  return (
    <form action="">
      <button onClick={handleClick} className="btn btn-light btn-lg btn-block">
        Dilo
      </button>
      <div className="form-group">
        <label htmlFor="rate">Rate</label>
        <div id="rate-value" className="badge badge-primary float-right">
          {speechBot.rate}
        </div>
        <input
          type="range"
          id="rate"
          className="custom-range"
          min="0.5"
          max="2"
          value={speechBot.rate}
          onChange={handleChange}
          step="0.1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pitch">Pitch</label>
        <div id="pitch-value" className="badge badge-primary float-right">
          {speechBot.pitch}
        </div>
        <input
          type="range"
          id="pitch"
          className="custom-range"
          min="0.5"
          max="2"
          value={speechBot.pitch}
          onChange={handleChange}
          step="0.1"
        />
      </div>
      <div className="form-group">
        <select
          id="voz"
          className="form-control form-control-lg"
          value={speechBot.voz}
          onChange={handleChange}
        >
          {loading &&
            voices.map(voice => (
              <option
                key={uuid()}
                datatype-lang={voice.lang}
                datatype-name={voice.name}
                value={voice.name}
              >
                {voice.name}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default SpechTranslator;
