import React from "react";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Floor() {
  const classes = useStyles();
  const [floor, setFloor] = React.useState("");
  const [room, setRoom] = React.useState("");
  let userObj = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  let { location } = history;
  let hostel = location.state.hostel;
  let roomNo;


  const handleChange = (event) => {
    if (userObj) {
      userObj.floor = event.target.value;
      localStorage.setItem("user", JSON.stringify(userObj));
    }
    setFloor(event.target.value);

  };

  const handleRoom = (event) => {
    roomNo = event.target.value;
    console.log(roomNo);
    if (userObj) {
      userObj.room = event.target.value;
      localStorage.setItem("user", JSON.stringify(userObj));
    }
   
    setRoom(event.target.value);
  };

  const handleBookedRoom = (event) => {
    let obj = {
      uid: userObj.uid,
      building: hostel,
      floor: floor,
      room: room,
    };
    let bookedRoom = localStorage.getItem("bookedRoom");
    if (bookedRoom) {
      bookedRoom = JSON.parse(localStorage.getItem("bookedRoom"));
      bookedRoom.push(obj);
      localStorage.setItem("bookedRoom", JSON.stringify(bookedRoom));
      history.push("/success");
      
    } else {
      let bookedRoom = [];
      bookedRoom.push(obj);
      localStorage.setItem("bookedRoom", JSON.stringify(bookedRoom));
      history.push("/success");
    }
  };

  const defaultProps = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "40rem", height: "25rem", padding: "20px" },
  };

  if (userObj) {
    userObj.hostel = hostel;
    localStorage.setItem("user", JSON.stringify(userObj));
  }
  return (
    <div className="container-hostel">
      <Box display="flex" justifyContent="center">
        <Box borderRadius="borderRadius" {...defaultProps}>
          <h1 style={{ textAlign: "center", color:"black" }}>Choose a Floor </h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label" style ={{textAlign:"center"}}>Select Floor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={floor}
              onChange={handleChange}
            >
              <MenuItem value={"1st"}>1st Floor</MenuItem>
              <MenuItem value={"2nd"}>2nd Floor</MenuItem>
              <MenuItem value={"3rd"}>3rd Floor</MenuItem>
              <MenuItem value={"4th"}>4th Floor</MenuItem>
              <MenuItem value={"5th"}>5th Floor</MenuItem>
            </Select>
          </FormControl>
          <div className="hostel-grid1">
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 1"}
            >
              1
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 2"}
            >
              2
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 3"}
            >
              3
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 4"}
            >
              4
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 5"}
            >
              5
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 6"}
            >
              6
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 7"}
            >
              7
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 8"}
            >
              8
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 9"}
            >
              9
            </button>
            <button
              className="hostel-button"
              onClick={handleRoom}
              value={"Room 10"}
            >
              10
            </button>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBookedRoom}
          >
            Book Room
          </Button>
        </Box>
      </Box>
    </div>
  );
}
