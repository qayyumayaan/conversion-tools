// import { useState } from 'preact/hooks'


export default function Template() {

  return (
    <>
      <p>Template description. </p>

      <div className="file-upload-button">
        <input type="file" id="file" style={{ display: 'none' }} />
        <label htmlFor="file">Upload File</label>
      </div>

    </>
  )
}
