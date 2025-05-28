import React from "react";

const Button = (props) => {
    return <button onClick={props.callApi}>
        Click to generate a Joke
    </button>
}

export default Button;