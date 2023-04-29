import React, { Component } from "react";
import "./css/request.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Swal from 'sweetalert2'

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
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn">
                Browse
                <span>
                  <input type="file" id="myfile" name="myfile" />
                </span>
              </label>
            </form>
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn">
                Browse
                <span>
                  <input type="file" id="myfile" name="myfile" />
                </span>
              </label>
            </form>
            <form className="form">
              <input type="text" id="path" placeholder="No file selected" />
              <label className="add-photo-btn">
                Browse
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
            <button className=" btn btn-primary btn-proceed" onClick={this.showAlert}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForm;
