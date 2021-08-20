function Status(){
    return(<>
    <h1>Redirecting to the page</h1></>);
  }
  export {Status};

//   import React, { useState, useEffect } from "react";
// function Status(){
//     const [user, setUser] = useState(null);
//   useEffect(() => {
//     const authObserver = firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return authObserver;
//   });

//   if (user) {
//     <>
//       <p>Welcome, {user.displayName}</p>
//       <small>{user.email}</small>
//       <button onClick={() => {}}>Sign out</button>
//     </>;
//   } else{}
//     return(<>
//     <h1>Redirecting to the page</h1></>);
//   }
//   export {Status};