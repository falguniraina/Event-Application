import React from 'react';

const ThemeSelector = ({ theme, onChange }) => {
  return (
    <div className="form-group">
      <label>Theme</label>
      <div className="theme-options">
        {['Minimal', 'Holiday', 'Abstract', 'Quantum'].map((themeOption) => (
          <div
            key={themeOption}
            className={`theme-option-box ${theme === themeOption ? 'selected' : ''}`}
            onClick={() => onChange({ target: { name: 'theme', value: themeOption } })}
          >
            <input
              type="radio"
              name="theme"
              value={themeOption}
              checked={theme === themeOption}
              onChange={onChange}
            />
            <label htmlFor={themeOption}>{themeOption}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
