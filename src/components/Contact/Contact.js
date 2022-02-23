import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="c">
      <h3>-:-Contact here-:-</h3>
      <img src={require("../../assets/image/contact.png").default} alt="contact" />
      <div className="c-info">
        <div className="c-left">
          <div className="insta">
            <a href="https://www.instagram.com/smileyimage" target="blank">
              instagram <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="fb">
            <a href="https://www.facebook.com/imagesmiley" target="blank">
              facebook <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="c-right">
          <i className="far fa-envelope"></i>
          <samp>info.smileyimage@gmail.com</samp>
        </div>
      </div>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="name" className="form-control" id="inputName4" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Subject</label>
          <input type="Massage" className="form-control" id="inputMessage" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Message</label>
          <textarea
            type="Massages"
            className="form-control"
            id="inputMessages4"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
