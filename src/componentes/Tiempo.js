import { useEffect, useState } from "react"

const Tiempo = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [mins, setMins] = useState(0);

  useEffect(() => {
    let hoy = new Date();
    let finCenso = new Date('2023-08-31');
    let diferencia = finCenso - hoy;
    setDias(Math.floor(diferencia / (1000 * 60 * 60 * 24)));
    setHoras(Math.floor((diferencia / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((diferencia / (1000 * 60)) % 60));
  }, [])

  return (
    <div className="row">
      <h2>Tiempo restante </h2>
      <div className="row">
        <p className="col">{dias}</p>
        <p className="col">:{horas}</p>
        <p className="col">:{mins}</p>
      </div>
    </div>
  )
}

export default Tiempo

// import React, { useState, useEffect } from 'react';

// const CountdownTimer = ({ targetDate }) => {
//   const calculateTimeRemaining = (targetDate) => {
//     const now = new Date();
//     const difference = targetDate - now;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);

//     return { days, hours, minutes };
//   };

//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining(targetDate));
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [targetDate]);

//   return (
//     <div>
//       <p>Days: {timeRemaining.days}</p>
//       <p>Hours: {timeRemaining.hours}</p>
//       <p>Minutes: {timeRemaining.minutes}</p>
//     </div>
//   );
// };

// export default CountdownTimer;
