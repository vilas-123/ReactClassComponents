import React from 'react';

function Columns() {
    const items = [
        {id:1,name:'vilas'},
        {id:2,name:'kiran'},
    ]; // Assuming items will be populated somewhere in your code.

    return (
        <React.Fragment>
            {items.map(item => (
                <React.Fragment key={item.id}>
                    
                    <p>{item.id }{item.name}</p>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}

export default Columns;
