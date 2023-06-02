import { useState, useEffect } from 'preact/hooks'
import './app.css'
import { h } from 'preact'
import DocxToHtml from './DocxToHtml'
import Template from './Template'
import DecimalToBinary from './DecimalToBinary'


export function App() {
  const [activeApp, setActiveApp] = useState('app');
  const [selectWidth, setSelectWidth] = useState(0);

  const handleAppChange = (event: h.JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    setActiveApp(event.currentTarget.value);
    const selectedOption = event.currentTarget.options[event.currentTarget.selectedIndex];
    const optionText = selectedOption?.text ?? '';
    const optionWidth = optionText.length * 8 + 100;
    setSelectWidth(optionWidth);
  }

  useEffect(() => {
    const selectBox = document.getElementById("app-select") as HTMLSelectElement | null;
    const selectedOption = selectBox?.options[selectBox.selectedIndex];
    const optionText = selectedOption?.text ?? '';
    const optionWidth = optionText.length * 8 + 100;
    setSelectWidth(optionWidth);
  }, []);

  var options = [
    { key: 'app', title: 'Conversion Tools' },
    { key: 'DocxToHtml', title: 'DOCX to HTML' },
    { key: 'template', title: 'Template'},
    { key: 'DecimalToBinary', title: 'Decimal To Binary'},
  ];

  return (
    <>
      <h1>
        {options.map(option => (
          option.key === activeApp ? option.title : null
        ))}
      </h1>

      {activeApp === 'app' ? (
        <p>Use this tool to convert a number of items for free. No uploaded files are collected.</p>
      ) : options.map((option) => {
        if (activeApp === option.key) {
          switch (option.key) {
            case 'DocxToHtml':
              return <DocxToHtml />;
            case 'template':
              return <Template />;
            case 'DecimalToBinary':
              return <DecimalToBinary />
          }
        } else {
          return null;
        }
      })}

      <div className="card">
        <div className="app-switcher">
          <label htmlFor="app-select">Select App: </label>
          <select id="app-select" style={{ width: `${selectWidth}px` }} value={activeApp} onChange={handleAppChange}>
            {options.map(option => (
              <option key={option.key} value={option.key}>{option.title}</option>
            ))}
          </select>
        </div>
      </div>

      <footer>
        <p>Check me out at <a href="https://qayyumayaan.dev/" class="text-white">my website</a>. This site uses Google Analytics.</p>
      </footer>
    </>
  )
}
