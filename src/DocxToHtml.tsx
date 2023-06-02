import { useState } from 'preact/hooks'
import mammoth from 'mammoth'
import pretty from 'pretty'
import { h } from 'preact'

export default function DocxToHtml() {
  const [htmlContent, setHtmlContent] = useState('')
  const [prettyHtml, setPrettyHtml] = useState('')
  const [showPretty, setShowPretty] = useState(true)

  const handleFileChange = async (event: h.JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }
  
    const fileReader = new FileReader();
  
    fileReader.onload = async (e) => {
      const arrayBuffer = e.target?.result;
      if (!arrayBuffer) {
        console.error('Error reading file: Array buffer is null');
        return;
      }
  
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer as ArrayBuffer });
        const html = result.value;
        setHtmlContent(html);
        setPrettyHtml(pretty(html));
      } catch (error) {
        console.error('Error converting file:', error);
      }
    };
  
    fileReader.onerror = (e) => {
      console.error('Error reading file:', e.target?.error);
    };
  
    fileReader.readAsArrayBuffer(file);
  };
  

  return (
    <>
      <p>Use this tool to convert any DOCX file to an HTML to use in your blog or website. </p>

      <div className="file-upload-button">
        <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
        <label htmlFor="file">Upload File</label>
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
    </>
  )
}
