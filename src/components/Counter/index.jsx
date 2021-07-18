import React from 'react';
import {useState} from 'react';

Counter.propTypes = {
    
};

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
           {count}
           <button onClick={()=> setCount(count => count+1)}>increase</button>
        </div>
    );
}

export default Counter;