import React, {useState} from 'react';


const MyComponent = () => {
    const [name, setName] = useState('Page Title')
  
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }

export default MyComponent;
