import React, {useState} from 'react';

const Kitty = () => {
    const [name, setName] = useState('Kitty')
  
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }

export default Kitty;