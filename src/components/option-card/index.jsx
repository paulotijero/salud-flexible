import PropTypes from 'prop-types';
// import { useState } from 'react';

const OptionCard = ({
  title,
  description,
  icon,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600 h-6 w-6 mr-4 border-gray-300"
      />
      <span className="flex-shrink-0 text-3xl mr-4">{icon}</span>
      <div className="flex-grow">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </label>
  );
};

OptionCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default OptionCard;
