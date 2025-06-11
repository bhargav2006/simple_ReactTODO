import { useNavigate } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";

import "./index_media_css.css";
import "./First.css";
import React from "react";
import entryvideo from "../media/entryvideo.mp4";
import wallpaper from "../media/firstwallpaper.jpg";

export default function First() {
  const navigate = useNavigate();

  const bg = {
    minHeight: "100vh",
    backgroundImage: `url('${wallpaper}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navbarStyle = {
    fontSize: "3.5rem",
    color: "blue",
  };

  let nameref = React.createRef();
  let emailref = React.createRef();
  let phref = React.createRef();
  let genderref = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameref.current.value;
    const email = emailref.current.value;
    const ph = phref.current.value;
    const gender = genderref.current.value;

    localStorage.setItem("username", name);
    localStorage.setItem("usermail", email);
    localStorage.setItem("userphno", ph);
    localStorage.setItem("usergender", gender);

    console.log(name);
    console.log(email);
    console.log(ph);
    console.log(gender);

    navigate("/2");
  };

 //useEffect to execute when the page loads
  React.useEffect(() => {
toast(` 👋 Welcome to the Todo App !
Please fill in your details to get started.`,
{
  position: "top-center",
  autoClose: 3000, 
  theme: "dark",
  style: {
    border: '1px solid #4CAF50',
    padding: '16px',
    backgroundColor: '#333',
    color: '#fff',
  },
});
  });
  return (
    <div style={bg}>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg justify-content-center">
        <span className="navbar-brand mx-auto" style={navbarStyle}>
          Hello!
        </span>
      </nav>

      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-md-6 text-center">
            <video
              autoPlay
              loop
              muted
              src={entryvideo}
              className="rounded img-fluid"
              alt="entry video"
              style={{ maxWidth: "350px" }}></video>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  ref={nameref}
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  ref={emailref}
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="phno">Phone</label>
                <input
                  ref={phref}
                  type="tel"
                  className="form-control"
                  id="Phno"
                  placeholder="Phone"
                  required
                />
              </div>
              <br />
              <div className="form-group col-md-5">
                <label htmlFor="Gender">Gender</label>
                <select
                  ref={genderref}
                  id="Gender"
                  className="form-control"
                  required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <br />
              <input
                type="submit"
                value="Let's Go"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
