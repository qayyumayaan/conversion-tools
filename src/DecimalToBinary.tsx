import { useState } from 'preact/hooks';

export default function DecimalToBinary() {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleDecimalChange = (e: any) => {
    const value = e.target.value;
    setDecimal(value);
    setBinary(decimalToBinary(value));
  };

  const decimalToBinary = (decimal: string): string => {
    const parsedDecimal = parseInt(decimal);
    if (isNaN(parsedDecimal)) return '';
    return parsedDecimal.toString(2);
  };

  return (
    <>
      <p>Template description.</p>
      <div>
        <label>Decimal:</label>
        <input type="text" value={decimal} onChange={handleDecimalChange} />
      </div>
      <div>
        <label>Binary:</label>
        <input type="text" value={binary} readOnly />
      </div>
    </>
  );
}
