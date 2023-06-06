import React, { Component } from "react";
import "./css/request.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2'


let file = document.getElementById('upload')

file.oninput = () => {
  let filename = file.files[0].name;

  
document.querySelector('label').innerText = filename;
}

class RequestForm extends Component {
  showAlert = () => {
    Swal.fire({
      text: "Form Submitted Successfully",
      icon: "success",
      confirmButtonText: "Back to Homepage",
    }).then(function () {
      // Redirect the User
      window.location.href = "/";
    });
  };

  render() {
    return (
      <div className="supplies">
        <div className="request-section">
          <h1>Request Details</h1>
          <p>Please upload documents that contain details of your request</p>
          <div className="request-content">
            <form className="form" encType="multipart/form-data">
              <div>
                <input 
                  type="file" 
                  id="upload" 
                  style={{display: "none"}} 
                />
                <label htmlFor="upload">No file selected</label>
              </div>
              <div>
                <input 
                  type="file" 
                  id="upload" 
                  style={{display: "none"}} 
                />
                <label htmlFor="upload">No file selected</label>
              </div>
              <div>
                <input 
                  type="file" 
                  id="upload" 
                  style={{display: "none"}} 
                />
                <label htmlFor="upload">No file selected</label>
              </div>
              <button className=" btn btn-primary btn-proceed">
              Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForm;
