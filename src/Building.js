import React from "react";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Building(props) {
  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "40rem", height: "25rem", padding: "30px" },
  };

  const history = useHistory();
  let { location } = history;
  let gender = location.state.gender;
  let userObj = JSON.parse(localStorage.getItem("user"));
  if(userObj)
  {
      userObj.gender = "Male";
      localStorage.setItem("user", JSON.stringify(userObj));
  }
  console.log(location.state.gender);
  return (
    <div className="container-hostel">
      <Box display="flex" justifyContent="center">
        <Box borderRadius="borderRadius" {...defaultProps}>
          <h1 style={{ textAlign: "center" }}>Choose a Hostel </h1>
          <div className="hostel-grid">
            <Link to={{ pathname: "/floor", state: { hostel: "1" } }}>
                <button className="hostel-button">{gender}1</button>
            </Link>
            <Link to={{ pathname: "/floor", state: { hostel: "2" } }}>
                <button className="hostel-button">{gender}2</button>
            </Link>
            <Link to={{ pathname: "/floor", state: { hostel: "3" } }}>
                <button className="hostel-button">{gender}3</button>
            </Link>
            <Link to={{ pathname: "/floor", state: { hostel: "4" } }}>
                <button className="hostel-button">{gender}4</button>
            </Link>
            <Link to={{ pathname: "/floor", state: { hostel: "5" } }}>
                <button className="hostel-button">{gender}5</button>
            </Link>
            <Link to={{ pathname: "/floor", state: { hostel: "6" } }}>
                <button className="hostel-button">{gender}6</button>
            </Link>

          </div>
        </Box>
      </Box>
    </div>
  );
}
