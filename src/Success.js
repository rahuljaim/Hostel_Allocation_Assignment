import React from "react";
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 3,
  border: 1,
  color: 'black',
  style: { width: '40rem', height: '25rem', padding:'30px' },
};
function Success() {

  let userInfo = localStorage.getItem("user");
  let name;
  let hostelNo;
  let roomNo;
  let gender;
  if(userInfo){
    userInfo = JSON.parse(userInfo);
    userInfo.hasBooked = true;
    localStorage.setItem("user", JSON.stringify(userInfo));
    name = userInfo.displayName;
    gender = userInfo.gender;
    hostelNo =(gender == "Male") ? "B"+userInfo.hostel : "G"+userInfo.hostel;
    roomNo = userInfo.room;
  }


  return (
    <Box display="flex" justifyContent="center">
        <Box borderRadius="borderRadius" {...defaultProps} >
        <h1 style={{ textAlign: "center", color:"black"  }}>Success </h1>
        <h4>Your room has been booked successfully.</h4>
        <h3>Your room details are as follows:</h3>
        <p></p>
        <h4>Hostel No. { hostelNo }</h4>
        <h4>Room No. { roomNo }</h4>
        </Box>
        </Box>
  );
}
export default Success;
