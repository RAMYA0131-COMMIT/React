import React from "react";
import { Link } from "react-router-dom";

const DashBoardComp = () =>{
    return(
        <div>
          <h1> DashBoard </h1>
          {/* <Link to ={'/Setting/Ngm'}>Dynamic Route </Link> */}
          <Link to ={'/Setting/$123Ngm'}>Dynamic Route </Link>

        </div>
    )
}

export default DashBoardComp;