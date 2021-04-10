import React from "react"; // so that we can write JSX


function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;