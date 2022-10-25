import React, { useEffect, useState } from 'react'
function App(){
  
const [time,setTime]=useState(new Date())

const updateTime =()=>{
    setTime(new Date())
}
useEffect(function(){
    setInterval(updateTime,1000)
})
    return(
        <>
        <h1>
            {time.getSeconds()}
        </h1>
        </>
    )
}
export default App