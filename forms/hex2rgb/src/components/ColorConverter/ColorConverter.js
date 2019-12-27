import React, { useEffect, useState } from 'react';

import './ColorConverter.css';

const DEFAULT_ERROR_TEXT = 'Ошибка!';
const DEFAULT_HEX_COLOR = '#34495e';
const MAX_LENGTH_HEX_COLOR = 7;

const isHex = color => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

const hexToRgb = hex => {
  const replacedHex = hex.replace('#','');
  const r = parseInt(replacedHex.substring(0, 2), 16);
  const g = parseInt(replacedHex.substring(2, 4), 16);
  const b = parseInt(replacedHex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const convertHexToRgb = hex => {
  return isHex(hex) ? hexToRgb(hex) : '';
};

const getHexError = hex => {
  return isHex(hex) ? '' : DEFAULT_ERROR_TEXT;
};

function ColorConverter() {
  const [error, setError] = useState(getHexError(DEFAULT_HEX_COLOR));
  const [inputColor, setInputColor] = useState(DEFAULT_HEX_COLOR);
  const [rgbColor, setRgbColor] = useState(convertHexToRgb(DEFAULT_HEX_COLOR));

  const handleChange = event => {
    const value = event.target.value;

    setInputColor(value);

    if (value.length !== MAX_LENGTH_HEX_COLOR) {
      return;
    }

    setError(getHexError(value));

    if (isHex(value)) {
      setRgbColor(convertHexToRgb(value));
    }
  };

  useEffect(
    () => {
      document.body.style.backgroundColor = rgbColor;
    },
    [rgbColor]
  );

  return (
    <div className="ColorConverter">
      <input
        className="ColorConverter-input"
        maxLength={MAX_LENGTH_HEX_COLOR}
        type="text"
        value={inputColor}
        onChange={handleChange}
      />
      <div className="ColorConverter-output">
        {error || rgbColor}
      </div>
    </div>
  );
}

export default ColorConverter;
