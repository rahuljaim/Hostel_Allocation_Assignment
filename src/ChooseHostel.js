import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Building from "./Building";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 3,
  border: 1,
  style: { width: "40rem", height: "25rem", padding: "30px" },
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(3),
      padding: 2,
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export const ChooseHostel = () => {
  var name;
  const history = useHistory();

  
  if (localStorage.getItem("user")) {
    let userObj = JSON.parse(localStorage.getItem("user"));
    if (userObj.hasBooked) {
      history.push("/dashboard");
    }
    else 
    history.push("/booked");
  } else {
    initApp();
    if (localStorage.getItem("user")) {
      let userObj = JSON.parse(localStorage.getItem("user"));
      let userId = userObj.uid;
      let getData = JSON.parse(localStorage.getItem("bookedRoom"));
      let result = getData.findIndex(e=>e.uid == userId)
      if(result == -1)
      {
        history.push("/booked");
      }
      else
      {
        history.push("/dashboard");
      }
    }
  }
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box borderRadius="borderRadius" {...defaultProps}>
          <h1 style={{ textAlign: "center" }}>Choose Your Hostel </h1>
          <div className={classes.root} style={{ textAlign: "center" }}>
            <Link to={{ pathname: "/building", state: { gender: "B" } }}>
              <Paper variant="outlined" style={{ textAlign: "center" }}>
                <img
                  src="https://image.flaticon.com/icons/png/512/163/163801.png"
                  height="100px"
                  width="100px"
                />
                <p>Boys Hostel</p>
              </Paper>
            </Link>
            <Link to={{ pathname: "/building", state: { gender: "G" } }}>
              <Paper
                variant="outlined"
                style={{ textAlign: "center" }}
                onClick={() => {
                  <Building gender={"G"} />;
                }}
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/163/163810.png"
                  height="100px"
                  width="100px"
                />
                <p>Girls Hostel</p>
              </Paper>
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
};
function initApp() {
  firebase.auth().onAuthStateChanged(
    function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function (accessToken) {
          // document.getElementById("sign-in-status").textContent = "Signed in";
          // document.getElementById("sign-in").textContent = "Sign out";
          console.log(uid);
          console.log(displayName);
          let userObj = {
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData,
          };

          localStorage.setItem("user", JSON.stringify(userObj));

          // document.getElementById("account-details").textContent =
          //   JSON.stringify(
          //     {
          //       displayName: displayName,
          //       email: email,
          //       emailVerified: emailVerified,
          //       phoneNumber: phoneNumber,
          //       photoURL: photoURL,
          //       uid: uid,
          //       accessToken: accessToken,
          //       providerData: providerData,
          //     },
          //     null,
          //     "  "
          //   );
        });
      } else {
        // User is signed out.
        document.getElementById("sign-in-status").textContent = "Signed out";
        document.getElementById("sign-in").textContent = "Sign in";
        document.getElementById("account-details").textContent = "null";
      }
    },
    function (error) {
      console.log(error);
    }
  );
}
