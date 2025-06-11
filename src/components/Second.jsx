import React from "react";
import { ToastContainer , toast } from "react-toastify";

import "./todo.css";
import "./todo_media_css.css";
import micon from "../media/snapmale1.jpg";
import wallpaper from "../media/secondwallpaper.jpg";
import fmicon from "../media/snapfemale1.jpg";

export default function Test1() {
  //styles
  const bg = {
    backgroundImage: `url('${wallpaper}')`,
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

  // data to be used in the component
  const [dbtn, setdbtnshow] = React.useState(false);
  const [dlist, setdlistshow] = React.useState("");

  const [showForm, setShowForm] = React.useState(false);
  const [showTaskHd, setShowTaskHd] = React.useState(false);
  const [list, setList] = React.useState([]);

  const ToggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle adding a task and updating the task list and hiding the form
  const tasktxt = React.useRef();
  const handleAdd = () => {
    if (tasktxt.current.value.trim() === "") {
      toast.error(
        "Please enter a task before adding."
      ,{
        autoClose: 2000,
        theme: "dark",
      style: {
        border: '1px solid #713200',
        padding: '16px',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
      return;
    } else {
      toast.success("Task added successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      setList([...list, `${tasktxt.current.value}`]);
      ToggleForm();
      if (list.length === 0) {
        setShowTaskHd(true);
      }
    }
  };

  // Function to handle task deletion
  const handleDelete = (indexToRemove) => {
    toast.success("You Finished a Task successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      style: {
        border: '1px solid green',
        padding: '16px', }
      });
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
    setShowTaskHd(updatedList.length > 0);
  };

  //useEffect to execute when the page loads
  React.useEffect(() => {
toast(` 👋 Welcome to the Todo App, ${name} !
You can add your tasks here and delete them when you are done`,
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
  }, [name]);

  //useEffect to clear the input field and focus on it when the form is toggled
  React.useEffect(() => {
    tasktxt.current.value = "";
    tasktxt.current.focus();
  }, [showForm]);

  // useEffect to update the dropdown list visibility based on the button state
  React.useEffect(() => {
    setdlistshow(dbtn ? "show" : "");
  }, [dbtn]);

  return (
    <div style={bg}>
    <ToastContainer />
      <nav className="navbar navbar-expand-lg justify-content-center">
        <span
          className="navbar-brand mx-auto"
          id="greeting"
          style={navbarStyle}>
          Hello, {name ? name : "Guest"}!
        </span>
        <div className="dropdown">
          <button
            className="btn btn-link rounded-circle "
            type="button"
            aria-expanded={!dbtn}
            onClick={() => setdbtnshow(!dbtn)}>
            <img
              src={userIcon}
              className="rounded-circle"
              alt="icon"
              style={{ width: "50px", height: "50px" }}
            />
          </button>
          <ul
            className={`dropdown-menu ${dlist}`}
            style={{
              right: "0",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              border: "1px solid aqua",
            }}>
            <li className="bi bi-person dropdown-item" style={{ color: "aliceblue" }}>
              {" "}
              Name: {name ? name : "Guest"}
            </li>
            <li className="bi bi-envelope dropdown-item" style={{ color: "aliceblue" }}>
              {" "}
              Email: {email ? email : "Null"}
            </li>
            <li className="bi bi-telephone dropdown-item" style={{ color: "aliceblue" }}>
              {" "}
              Phone: {ph ? ph : "Null"}
            </li>
            <li
              className={`bi bi-gender-${
                gender.toLowerCase() ? gender.toLowerCase() : "male"
              } dropdown-item`} style={{ color: "aliceblue" }}>
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
