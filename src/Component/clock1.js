import React, { useEffect, useState } from "react";
function Clock1() {
  const [time, setTime] = useState(new Date());
  function updateTime() {
    setTime(new Date());
  }
  useEffect(function () {
    setInterval(updateTime, 1000);
  }, );
  return (
    <>
      <div>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
    </>
  );
}
export default Clock1;
