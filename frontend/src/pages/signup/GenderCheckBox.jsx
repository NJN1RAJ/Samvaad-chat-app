import React from "react";

const GenderCheckBox = ({ onGenderChange }) => {
  const handleGenderChange = (e) => {
    onGenderChange(e.target.value);
  };
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleGenderChange}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleGenderChange}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
