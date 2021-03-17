import emailjs from "emailjs-com";
import React from "react";

export default function ContactUs() {
  function confirmationAlert() {
    alert(
      "Your email message has been successfully sent!  We will get back to you soon!"
    );
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whu9k9j",
        "template_popl95b",
        e.target,
        "user_A3wIO5e0cND8z5T6Fbj4f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    confirmationAlert();
  }

  return (
    <div id="page-wrapper">
      <div id="featured" className="container">
        <div class="font-bold text-lg">
          For all inquiries, please email us using the form below.
        </div>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
