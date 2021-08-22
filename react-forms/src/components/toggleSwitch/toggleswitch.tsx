import React, { FC } from 'react';
import { IToggleSwitch } from '../../types';

export const ToggleSwitch: FC<IToggleSwitch> = ({ id, checked, onChange }) => {
  const defaultProps = {
    optionLabels: ['Female', 'Male'],
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className="toggle-switch-inner"
            data-yes={defaultProps.optionLabels[0]}
            data-no={defaultProps.optionLabels[1]}
          />
          <span className="toggle-switch-switch" />
        </label>
      ) : null}
    </div>
  );
};
