import React, {useState} from 'react';

const Hello = () => {
    const [name, setName] = useState('Hello')
  
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }

export default Hello;