import React, {useState} from "react";
import "./css/request.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import axios from "../api/axios";


const REQUEST_FORM_URL = ('/api/v1/reqFiles')


const RequestForm = () => {
  const [file1, setFile1] = useState('');
  const [file2, setFile2] = useState('');
  const [file3, setFile3] = useState('');
  const [message, setMessage] = useState('')
  const [filename, setFilename] = useState('No file selected ')
  const [filename1, setFilename1] = useState('No file selected ')
  const [filename2, setFilename2] = useState('No file selected ')


  const onChange= e => {
    setFile1(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const onChange1= e => {
    setFile2(e.target.files[0]);
    setFilename1(e.target.files[0].name);
  }

  const onChange2= e => {
    setFile3(e.target.files[0]);
    setFilename2(e.target.files[0].name);
  }


  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('file1',file1);
    formData.append('file2',file2);
    formData.append('file3',file3);
    formData.append('message',message);


    try {
      const response = await axios.post(REQUEST_FORM_URL, formData,
      {
        headers: { 'Content-Type' : 'multipart/form-data'}
      })
      console.log(JSON.stringify(response.data));
      window.location.reload(false)
    } catch (error) {
      
    }

    Swal.fire({
      text: "Form Submitted Successfully",
      icon: "success",
      confirmButtonText: "Back to Homepage",
    }).then(function () {
      // Redirect the User
      window.location.href = "/";
    });
    console.log(file1, file2, file3, message);
  };

    return (
      <div className="supplies">
        <div className="request-section">
          <h1>Request Details</h1>
          <p>Please upload documents that contain details of your request</p>
          <div className="request-content">
            <form className="form">
              <form className='form'>
                <input type="text" id="path" placeholder = {filename} />
                <label className="add-photo-btn1">
                  Upload Quoatation
                  <span>
                    <input type="file" id="myfile"  name="file1" onChange={onChange} />
                  </span>
               </label>
              </form>
              <form className='form'>
                <input type="text" id="path" placeholder = {filename1} />
                <label className="add-photo-btn1">
                  Upload Proposal
                  <span>
                    <input type="file"  id="myfile" name="file2" onChange={onChange1} />
                  </span>
               </label>
              </form>
              <form className='form'>
                <input type="text" id="path" placeholder = {filename2} />
                <label className="add-photo-btn1">
                  Upload Inoformation <br /> Document
                  <span>
                    <input type="file" id="myfile" name="file3" onChange={onChange2} />
                  </span>
               </label>
              </form>
              <textarea name="message" id="message" cols="50" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}>
                {" "}
              </textarea>
            </form>
            <button className="btn-proceed" onClick={onSubmit}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
}

export default RequestForm;
