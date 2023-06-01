import { useState } from 'preact/hooks'
import './app.css'
import mammoth from 'mammoth'

export function App() {
  const [htmlContent, setHtmlContent] = useState('')

  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()

    fileReader.onload = async (e) => {
      const arrayBuffer = e.target.result

      try {
        const result = await mammoth.convertToHtml({ arrayBuffer })  // Changed method to convertToHtml
        const html = result.value
        setHtmlContent(html)
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
      <div class="card">
        <input type="file" onChange={handleFileChange} />
        {htmlContent && (
          <textarea
            value={htmlContent}
            readOnly
            rows={10}
            style={{ width: '100%' }}
          />
        )}
      </div>
    </>
  )
}
