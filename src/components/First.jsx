import { useNavigate } from "react-router-dom";
import "./First.css";
import React from "react";
import entryvideo from "../media/entryvideo.mp4";

export default function First() {
  const navigate = useNavigate();

  const bg = {
    minHeight: "100vh",
    backgroundImage:
      "url('https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/lava-abstract-formation-8k-2560x1600/23136-11.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const navbarStyle = {
    fontSize: "3.5rem",
    color: "blue",
  };

  // const snaplogo =
  //   "data:image/png;base64,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";

  let nameref = React.createRef();
  let emailref = React.createRef();
  let phref = React.createRef();
  let genderref = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const name = document.getElementById("Name").value;
    const name = nameref.current.value;

    // const email = document.getElementById("Email").value;
    const email = emailref.current.value;

    // const ph = document.getElementById("Phno").value;
    const ph = phref.current.value;

    // const gender = document.getElementById("Gender").value;
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

  return (
    <div style={bg}>
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
