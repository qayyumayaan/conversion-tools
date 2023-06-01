import { useState } from 'preact/hooks'
import './app.css'
import mammoth from 'mammoth'
import pretty from 'pretty'

export function App() {
  const [htmlContent, setHtmlContent] = useState('')
  const [prettyHtml, setPrettyHtml] = useState('')
  const [showPretty, setShowPretty] = useState(true)

  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = async (e) => {
      const arrayBuffer = e.target.result

      try {
        const result = await mammoth.convertToHtml({ arrayBuffer })  
        const html = result.value 
        setHtmlContent(html)
        setPrettyHtml(pretty(html))
      } catch (error) {
        console.error('Error converting file:', error)
      }
    }

    fileReader.onerror = (e) => {
      console.error('Error reading file:', e.target.error)
    }

    fileReader.readAsArrayBuffer(file)
  }

  return (
    <>
      <h1>Docx to HTML</h1>
      <p>Use this tool to convert any DOCX file to an HTML to use in your blog. No data is collected. </p>
      <div class="card">
        <div className="file-upload-button" onChange={handleFileChange}>
          <input type="file" id="file" style={{ display: 'none' }} />
          <label for="file">Upload File</label>
        </div>
        {htmlContent && (
          <>
            <button className="toggle-button" onClick={() => setShowPretty(!showPretty)}>
              Toggle Compressed HTML
            </button>
            <div className="textarea-container">
              <textarea
                value={showPretty ? prettyHtml : htmlContent}
                readOnly
                rows={10}
                style={{ width: '100%' }}
              />
            </div>
          </>
        )}
      </div>
    </>
  )
}
