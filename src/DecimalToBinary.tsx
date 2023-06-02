import { useState } from 'preact/hooks';

export default function NumberConverter() {
  const [number, setNumber] = useState('');
  const [inputSystem, setInputSystem] = useState('decimal');
  const [outputSystem, setOutputSystem] = useState('binary');
  const [convertedNumber, setConvertedNumber] = useState('');

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    convertNumber(value);
  };

  const convertNumber = (value) => {
    let convertedValue = '';

    if (inputSystem === 'binary') {
      if (outputSystem === 'decimal') {
        convertedValue = parseInt(value, 2).toString(10);
      } else if (outputSystem === 'octal') {
        convertedValue = parseInt(value, 2).toString(8);
      } else if (outputSystem === 'hexadecimal') {
        convertedValue = parseInt(value, 2).toString(16).toUpperCase();
      }
    } else if (inputSystem === 'decimal') {
      if (outputSystem === 'binary') {
        convertedValue = parseInt(value, 10).toString(2);
      } else if (outputSystem === 'octal') {
        convertedValue = parseInt(value, 10).toString(8);
      } else if (outputSystem === 'hexadecimal') {
        convertedValue = parseInt(value, 10).toString(16).toUpperCase();
      }
    } else if (inputSystem === 'octal') {
      if (outputSystem === 'binary') {
        convertedValue = parseInt(value, 8).toString(2);
      } else if (outputSystem === 'decimal') {
        convertedValue = parseInt(value, 8).toString(10);
      } else if (outputSystem === 'hexadecimal') {
        convertedValue = parseInt(value, 8).toString(16).toUpperCase();
      }
    } else if (inputSystem === 'hexadecimal') {
      if (outputSystem === 'binary') {
        convertedValue = parseInt(value, 16).toString(2);
      } else if (outputSystem === 'decimal') {
        convertedValue = parseInt(value, 16).toString(10);
      } else if (outputSystem === 'octal') {
        convertedValue = parseInt(value, 16).toString(8);
      }
    }

    setConvertedNumber(convertedValue);
  };

  const handleInputSystemChange = (e) => {
    setInputSystem(e.target.value);
    convertNumber(number);
  };

  const handleOutputSystemChange = (e) => {
    setOutputSystem(e.target.value);
    convertNumber(number);
  };

  return (
    <>
      <p>Template description.</p>
      <div>
        <label>Number:</label>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <label>Input System:</label>
        <select value={inputSystem} onChange={handleInputSystemChange}>
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>
      <div>
        <label>Output System:</label>
        <select value={outputSystem} onChange={handleOutputSystemChange}>
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>
      <div>
        <label>Converted Number:</label>
        <input type="text" value={convertedNumber} readOnly />
      </div>
    </>
  );
}
