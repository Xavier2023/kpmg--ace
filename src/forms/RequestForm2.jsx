import React, { Component } from "react";
import "./css/request2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2'

class RequestForm2 extends Component {
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
      <div className="dark">
        <div className="request-section">
          <h1>Request Details</h1>
          <p>Please upload documents that contain details of your request</p>
          <div className="request-content">
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn2">
                Upload Quotation
                <span>
                  <input type="file" id="myfile" name="myfile" />
                </span>
              </label>
            </form>
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn2">
                Upload Proposal
                <span>
                  <input type="file" id="myfile" name="myfile" />
                </span>
              </label>
            </form>
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn2">
                Upload Information<br />Document
                <span>
                  <input type="file" id="myfile" name="myfile" />
                </span>
              </label>
            </form>
            <form className="form">
              <textarea name="message" id="message" cols="55" rows="5">
                {" "}
              </textarea>
            </form>
            <button className="btn-proceed" onClick={this.showAlert}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForm2;
