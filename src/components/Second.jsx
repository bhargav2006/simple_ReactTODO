import React from "react";
import "./todo.css";
import "./todo_media_css";
import micon from "./White_Round_male_User_Profile_Icon.png";
import fmicon from "./White_Round_Female_User_Profile_Icon.png";

export default function Test1() {
  //styles
  const bg = {
    backgroundImage: "url('https://wallpapercave.com/wp/wp12818169.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: "0",
  };

  const navbarStyle = {
    fontSize: "3.5rem",
    color: "blue",
  };

  // Retrieve user data from localStorage
  const name = localStorage.getItem("username");
  const email = localStorage.getItem("usermail");
  const ph = localStorage.getItem("userphno");
  const gender = localStorage.getItem("usergender");
  const userIcon = gender === "Female" ? fmicon : micon;

  const [dbtn, setdbtnshow] = React.useState(false);
  const [dlist, setdlistshow] = React.useState("");

  // data to be used in the component
  const [showForm, setShowForm] = React.useState(false); // State to control form visibility
  const [showTaskHd, setShowTaskHd] = React.useState(false); // State to control taskheading visibility
  const [list, setList] = React.useState([]); // State to manage the task list[]

  // Function to toggle the visibility of the form
  const ToggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle adding a task and updating the task list and hiding the form
  const tasktxt = React.useRef(); // Ref to access the input field for task text
  // (useref is best for function and createref is best for class components)
  const handleAdd = () => {
    if (tasktxt.current.value.trim() === "") {
      alert("Please enter a task before adding.");
      return; // Exit if the input is empty
    } else {
      setList([...list, `${tasktxt.current.value}`]);
      ToggleForm(); // Hide the form after adding a task
      if (list.length === 0) {
        setShowTaskHd(true); // Show the task heading if the list was empty before adding a task
      }
    }
  };

  // Function to handle task deletion
  const handleDelete = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
    setShowTaskHd(updatedList.length > 0); // Show the task heading if the list was empty before adding a task
  };

  //useEffect to execute when the page loads
  React.useEffect(() => {
    // alert(
    //   `Welcome to the Todo App!${name},
    //    You can add tasks, delete them, and view your tasks here.`
    // );
  });

  //useEffect to clear the input field and focus on it when the form is toggled
  React.useEffect(() => {
    tasktxt.current.value = ""; // Clear the input field when toggling the form
    tasktxt.current.focus(); // Focus on the input field when the form is shown
  }, [showForm]); // Effect to log the showform whenever it changes

  // useEffect to update the dropdown list visibility based on the button state
  React.useEffect(() => {
    setdlistshow(dbtn ? "show" : "");
  }, [dbtn]);

  return (
    <div style={bg}>
      <nav className="navbar navbar-expand-lg justify-content-center">
        <span
          className="navbar-brand mx-auto"
          id="greeting"
          style={navbarStyle}>
          Hello, {name ? name : "Guest"}!
        </span>
        {/* Display user information in the navbar */}
        <div className="dropdown">
          <button
            className="btn btn-link rounded-circle "
            type="button"
            aria-expanded={!dbtn}
            onClick={() => setdbtnshow(!dbtn)}>
            <img
              src={userIcon}
              alt="icon"
              style={{ width: "35px", height: "35px" }}
            />
          </button>
          <ul
            className={`dropdown-menu ${dlist}`}
            style={{
              right: "0",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <li className="bi bi-person dropdown-item">
              {" "}
              Name: {name ? name : "Guest"}
            </li>
            <li className="bi bi-envelope dropdown-item">
              {" "}
              Email: {email ? email : "Null"}
            </li>
            <li className="bi bi-telephone dropdown-item">
              {" "}
              Phone: {ph ? ph : "Null"}
            </li>
            <li
              className={`bi bi-gender-${
                gender.toLowerCase() ? gender.toLowerCase() : "male"
              } dropdown-item`}>
              {" "}
              Gender: {gender ? gender : "others"}
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <button
          id="addtask"
          onClick={ToggleForm}
          className="btn btn-primary btn-lg btn-block"
          style={{ maxWidth: "400px", width: "100%" }}>
          add a task yourself
        </button>
      </div>

      <br />

      <form
        hidden={!showForm}
        className="row g-2"
        id="addform"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px !important",
        }}>
        <input
          type="text"
          ref={tasktxt}
          className="form-control transparent-input"
          id="addtaskip todo"
          style={{
            marginTop: "10px !important",
            width: "25%",
            color: "antiquewhite",
          }}
          placeholder="add a task yourself"
        />

        <input
          type="button"
          className="form-control transparent-input"
          id="addtaskbtn"
          style={{ marginTop: "10px !important", width: "25%" }}
          onClick={handleAdd}
          value="Add"
        />

        <input
          type="button"
          className="form-control transparent-input"
          id="addtaskclr"
          style={{ marginTop: "10px !important", width: "25%" }}
          onClick={ToggleForm}
          value="Clear"
        />
      </form>

      <br />

      <ul
        className="justify-content-center"
        id="tasklist"
        style={{
          marginTop: "50px !important",
          listStyleType: "none",
          color: "aqua",
          maxWidth: "400px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <h4
          id="tasklist-heading"
          style={{
            color: "aqua",
            // display: "none",
            textAlign: "center",
            marginBottom: "15px !important",
          }}
          hidden={!showTaskHd}>
          Hey, check out the things to do....
        </h4>

        {list.map((taskhead, index) => (
          <li className="task" key={index}>
            {taskhead}
            <button className="delbtn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
