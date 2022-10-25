import React, { useEffect, useState } from "react";
function Clock() {
  const [date, setDate] = useState(new Date());
  const [count,setCount] = useState(0);
  function updateTimer() {
    setDate(new Date());
    setCount(count=>count+1);
    
  }
  //componentdidMount
  useEffect(function () {
   
      setInterval(updateTimer, 1000) 
     
   
  }, []);


  return (
    <>
    <h1>{count}</h1>
      <div>{date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds()}</div>
    </>
  );
}
export default Clock;
