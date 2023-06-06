import React, {useState} from 'react'
import "../css/request2.css";

const Quotation = () => {

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('No file selected ')


  const onChange = e => {
    setFile(e.target.files);
    setFilename(e.target.files[0].name);
  }
  return (
    <div>
      <form className='form'>
        <input type="text" id="path" placeholder = {filename} />
        <label className="add-photo-btn2">
          Upload Quotation
          <span>
            <input type="file" id="myfile" name="myfile" onChange={onChange} />
          </span>
        </label>
      </form>
    </div>
  )
}

export default Quotation
