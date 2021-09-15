import React from "react";

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Phạm Ngọc Long {props.name} years old {props.age}</p>
            <input type="text" onChange={props.changed} ></input>
        </div>

    )

}

export default Person;