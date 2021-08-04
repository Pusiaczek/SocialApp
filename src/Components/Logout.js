import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Logout(props) {

    props.dispatch({
        type: 'logout'
    })



    return (
        <React.Fragment>
            {props.isLogged && <Redirect to='/' />}
        </React.Fragment>
    )
}

export default Logout;