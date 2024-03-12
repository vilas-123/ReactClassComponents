import React from 'react';

// Destructure props to directly access the 'Item' prop
function Person({ Item }) {
  return (
    <div>My name is {Item.name}</div>
  );
}

export default Person;
