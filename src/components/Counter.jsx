
import { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0);
    
    const handleClickUp = () => {
       setCount(count+1);
    };
    const handleClickDown = () => {
       setCount(count-1);
    };

  return (
    <>
    Count value: {count}
    <button onClick={handleClickUp}>Click to count up</button>
    <button onClick={handleClickDown}>Click to count down</button>
    </>
  )
}
