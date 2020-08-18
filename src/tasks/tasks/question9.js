import React from 'react';

const PersonWithProps = (props) => {
    return ( 
    <div>
    <p>Name: {props.name} Age: {props.age}</p>
    </div>
)
    }

export default PersonWithProps;