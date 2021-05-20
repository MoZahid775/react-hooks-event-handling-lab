// Code Keypad Component Here
import React from "react";

//Returning a console.log to display test when the user changes values within the input field
function Keypad(){return <input onChange={()=>console.log("Entering password...")} type="password"></input>}

export default Keypad
