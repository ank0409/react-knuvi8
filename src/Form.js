import React, { useState, useEffect } from 'react';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === 'Option 1') {
      setOptions(['Option 1.1', 'Option 1.2', 'Option 1.3']);
    } else if (selectedOption === 'Option 2') {
      setOptions(['Option 2.1', 'Option 2.2', 'Option 2.3']);
    } else {
      setOptions([]);
    }
  }, [selectedOption]);

  return (
    <form>
      <label>
        Select Attribute:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Please select</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </label>

      {options.length > 0 && (
        <label>
          Set Attribute Value:
          <select>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button>Add more atts +</button>
        </label>
      )}
    </form>
  );
};

export default Form;
