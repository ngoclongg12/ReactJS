import React, { useState } from 'react';

function Example() {
    const [count, setcount] = useState(0);
    return ( 
        <div>
        <p> Số lần click { count }times </p> 
        <button onClick = {() => setcount(count + 2) }> Click </button> 
        </div>
    );
};

export default Example;