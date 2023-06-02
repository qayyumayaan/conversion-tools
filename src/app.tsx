import { useState } from 'preact/hooks'
import './app.css'
import DocxToHtml from './DocxToHtml'
import { h } from 'preact'

export function App() {
  const [activeApp, setActiveApp] = useState('app')

  const handleAppChange = (event: h.JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    setActiveApp(event.currentTarget.value)
  }

  var options = [
    { key: 'app', title: 'Conversion Tools' },
    { key: 'DocxToHtml', title: 'DOCX to HTML' },
    { key: 'template', title: 'Template'},
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
          ) : (
            <DocxToHtml />
      )}


      <div className="card">
        <div className="app-switcher">
          <label htmlFor="app-select">Select App: </label>
          <select id="app-select" value={activeApp} onChange={handleAppChange}>
            <option value="app">Home</option>
            <option value="DocxToHtml">Docx to HTML</option>
            <option value="template">Template</option>
          </select>
        </div>


      </div>

      <footer>        
        <p>Check me out at <a href="https://qayyumayaan.dev/" class="text-white">my website</a>. This site uses Google Analytics.</p>
      </footer>
    </>
  )
}
