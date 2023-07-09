import React, { useState} from "react";
import PropTypes from "prop-types";
// import TextForm from "./TextForm";
import "./Navbar.css";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const capitalize =(word)=>{
    let wrd = word.toLowerCase();
    return wrd.charAt(0).toUpperCase() + wrd.slice(1);
    }
    const[flg,setFlg] = useState(0);

  return (
    
    <div>
      <nav
        className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  About
                </Link> */}
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdown}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <input
              name="color"
              type="radio"
              className="clr1 mx-2"
              onClick={(e) => {

                let check = e.target;
                
                if(props.mode !=='success')
                {document.body.style.backgroundColor = "#097414";
                props.textref.current.style.backgroundColor = "#097414";
                props.textref.current.style.color = "#212540";
                props.setMode("success");
                props.showAlert("Custom Mode Enabled","success");
                props.setBtn("success");
              }

                else if(flg === 0 ){
                  props.setMode("light");
                  props.setText('dark');
                  document.body.style.backgroundColor = 'white';
                  props.showAlert("Light Mode Enabled","success");
                  props.setBtn("primary");
                  props.textref.current.style.backgroundColor = "white";
                  props.textref.current.style.color = "#212540";
                  check.checked = false;
                    
                }

                else{
                  props.setMode("dark");
                  props.setText('light');
                  document.body.style.backgroundColor = '#212540';
                  props.showAlert("Dark Mode Enabled","success");
                  props.setBtn("light");
                  props.textref.current.style.backgroundColor = "#212540";
                  props.textref.current.style.color = "white";
                  check.checked = false;
                }
              }}
            />
            <input
              name="color"
              type="radio"
              className="clr2 mx-2"
              onClick={(e) => {
                
                let check = e.target;

                if(props.mode !== "danger"){
                document.body.style.backgroundColor = "#810505";
                props.setMode("danger");
                props.showAlert("Custom Mode Enabled","success");
                props.setBtn("danger");
                props.textref.current.style.backgroundColor = "#810505";
                props.textref.current.style.color = "#212540";
                }

                else if(flg === 0){
                  props.setMode("light");
                  props.setText('dark');
                  document.body.style.backgroundColor = 'white';
                  props.showAlert("Light Mode Enabled","success");
                  props.setBtn("primary");
                  props.textref.current.style.backgroundColor = "white";
                  props.textref.current.style.color = "#212540";
                  check.checked = false;
                    
                }

                else{
                  props.setMode("dark");
                  props.setText('light');
                  document.body.style.backgroundColor = '#212540';
                  props.showAlert("Dark Mode Enabled","success");
                  props.setBtn("light");
                  props.textref.current.style.backgroundColor = "#212540";
                  props.textref.current.style.color = "white";
                  check.checked = false;
                }
              }}
            />
            <input
              name="color"
              type="radio"
              className="clr3 mx-2"
              onClick={(e) => {

                let check = e.target;

                if(props.mode !== 'warning')
                {document.body.style.backgroundColor = "#c0b42a";
                props.setMode("warning");
                props.showAlert("Custom Mode Enabled","success");
                props.setBtn("warning");
                props.textref.current.style.backgroundColor = "#c0b42a";
                props.textref.current.style.color = "#212540";
                // check.checked = 'true';
              }

                else if(flg === 0){
                  props.setMode("light");
                    props.setText('dark');
                    document.body.style.backgroundColor = 'white';
                    props.showAlert("Light Mode Enabled","success");
                    props.setBtn("primary");
                    props.textref.current.style.backgroundColor = "white";
                    props.textref.current.style.color = "#212540";
                    check.checked = false;
                    
                }

                else{
                  props.setMode("dark");
                  props.setText('light');
                  document.body.style.backgroundColor = '#212540';
                  props.showAlert("Dark Mode Enabled","success");
                  props.setBtn("light");
                  props.textref.current.style.backgroundColor = "#212540";
                  props.textref.current.style.color = "white";
                  check.checked = false;
                }
              }}
            />
            <div className={`form-check form-switch text-${props.text} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={(e) => {
                  let check = e.target.checked;
                  if (check) {
                    props.setMode("dark");
                    props.setText('light');
                    document.body.style.backgroundColor = '#212540';
                    props.showAlert("Dark Mode Enabled","success");
                    props.setBtn("light");
                    props.textref.current.style.backgroundColor = "#212540";
                    props.textref.current.style.color = "white";
                    setFlg(1)
                  } 
                  else{
                    props.setMode("light");
                    props.setText('dark');
                    document.body.style.backgroundColor = 'white';
                    props.showAlert("Light Mode Enabled","success");
                    props.setBtn("primary");
                    props.textref.current.style.backgroundColor = "white";
                    props.textref.current.style.color = "#212540";
                    setFlg(0)
                  }
                }}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {capitalize(props.text)} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  dropdown: PropTypes.string,
};

Navbar.defaultProps = {
  title: "ENTER TITLE HERE...",
  dropdown: "dropdown info here...",
};
