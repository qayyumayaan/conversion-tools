import { useState } from 'preact/hooks'
import './app.css'
import DocxToHtml from './DocxToHtml'

export function App() {
  const [activeApp, setActiveApp] = useState('app')

  const handleAppChange = (event) => {
    setActiveApp(event.target.value)
  }

  return (
    <>
      <h1>{
        activeApp === 'app' ? 'Conversion Tools' : 'Docx to HTML'
      }</h1>

      {activeApp === 'app' ? (
          // <h2>This is the App page</h2>
          /* Replace this with your App component content */
          <p>Use this tool to convert a number of items for free. No uploaded files are collected.</p>
        ) : (
          <DocxToHtml />
        )}


      <div className="card">
        <div className="app-switcher">
          <label htmlFor="app-select">Select App: </label>
          <select id="app-select" value={activeApp} onChange={handleAppChange}>
            <option value="app">Home</option>
            <option value="docxToHtml">Docx to HTML</option>
          </select>
        </div>


      </div>
    </>
  )
}
