import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ================= email valid start here ==================

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required");
      console.log(errMsg);
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required");
    } else if (email === "") {
      setErrMsg("Email is required");
    } else if (subject === "") {
      setErrMsg("Please give me your subject");
    } else if (message === "") {
      setErrMsg("Message is required");
    } else {
      setSuccessMsg(
        `Thank you ${username},Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setEmail("");
      setPhoneNumber("");
      setUsername("");
      setMessage("");
      setSubject("");
      console.log(message, username, email, phoneNumber, subject);
    }

    // console.log(username)
  };

  // =========== This is google sheet code. ===================

  // function Submit (e) {
  //   const formEle = document.querySelector("form")
  //   e.preventDefault()
  //   console.log("submit in console")
  //   const FormData = new FormData(formEle)
  //   fetch("https://script.google.com/macros/s/AKfycbw-Nz3yahR1-CVZgTH0V6eZHx2kBfeUQ7oc6JQKprkWYFO-PXyW8V_joeeJtU0pUK5N/exec",{
  //     method: "POST",
  //     body: FormData
  //   })
  // };

  return (
    <div className="App" id="Contact">
      <hr />
      <div className="container">
        <h5>Contact Me</h5>

        <div className="contact">
          <div className="contact-left">
            <div className="responsive-img">
              <img src="imgs/handshake.jpeg" alt="handimgs" />
            </div>
            <div className="contact-text">
              <h4>Ashutosh</h4>
              <div className="neeche">
                <p>Web Developer</p>
              </div>
              <p>
                First of all, Thanks for visit over WebSite. If you like this,
                Please click on the blow link. and if you are more intrested
                Fill form and Email Now.
              </p>
              <p>
                Phone<span> +917248099165</span>
              </p>
              <p>
                Email
                <a
                  href="https://mail.google.com/mail/u/1/#inbox"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span> ashutoshparihar512@gmail.com</span>
                </a>
              </p>
              <h6>FIND ME IN</h6>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/ashutoshpariharr"
                rel="noreferrer"
                target="_blank"
              >
                <img src="imgs/git hub.jpeg" alt="git hub imgs" width={100} />
              </a>
              <a
                href="https://internshala.com/student/dashboard"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="imgs/internshala.webp"
                  alt="git hub imgs"
                  width={100}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-parihar-110916281/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="imgs/icons8-linkedin-48.png"
                  alt="git hub imgs"
                  width={100}
                />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              {errMsg && <p className="errormsg">{errMsg}</p>}
              {successMsg && (
                <p id="sucs" className="errormsg">
                  {successMsg}
                </p>
              )}
              <div className="half">
                <div className="mobile">
                  <p>YOUR NAME</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    name="text"
                    id="name"
                  />
                </div>
                <div id="margin" className="mobile">
                  <p>PHONE NUMBER</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    type="Mobile"
                    name="text"
                    id="name"
                  />
                </div>
              </div>
              <div className="full-input">
                <p>EMAIL</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="text"
                  id="name"
                />
              </div>
              <div className="full-input">
                <p>SUBJECT</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  type="Subject"
                  name="text"
                  id="name"
                />
              </div>
              <div className="full-input">
                <p>MESSAGE</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="Message"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="btn-form">
                <button className="button" type="submit" onClick={handleSend}>
                  SEND MESSAGE
                </button>
              </div>
              <br />
            </form>
            {successMsg && (
              <p className="errormsg" id="sucs">
                {successMsg}
              </p>
            )}
            {errMsg && <p className="errormsg">{errMsg}</p>}
          </div>
        </div>
        <h1>
          This is just simple form, if you send me message it isn't send me. it
          send in console. So if you try to send me message then send me
          private.
        </h1>
      </div>
    </div>
  );
};
export default Contact;
