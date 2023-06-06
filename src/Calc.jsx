import React from "react";
import {addition,sub,mult,div} from "./App";


function App(){
    return( 
    <>
      <ul>
        <li> {addition(40,4)}</li>
        <li> {sub(40,4)}</li>
        <li>{mult(40,4)}</li>
        <li>{div(40,4)}</li>
      </ul>
      </>
 );

}
export default App;