import React, {useState} from "react";
import Quotation from "./formComponent/Quotation";
import Information from "./formComponent/Information";
import Proposal from "./formComponent/Proposal";
import "./css/request2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";


const RequestForm2 = () => {


  const showAlert = () => {
    Swal.fire({
      text: "Form Submitted Successfully",
      icon: "success",
      confirmButtonText: "Back to Homepage",
    }).then(function () {
      // Redirect the User
      window.location.href = "/";
    });
  };

    return (
      <div className="supplies">
        <div className="request-section">
          <h1>Request Details</h1>
          <p>Please upload documents that contain details of your request</p>
          <div className="request-content">
             <Quotation />
             <Proposal />
             <Information />
            <form className="form">
              <textarea name="message" id="message" cols="50" rows="5">
                {" "}
              </textarea>
            </form>
            <button className="btn-proceed" onClick={showAlert}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    );
}

export default RequestForm2;
