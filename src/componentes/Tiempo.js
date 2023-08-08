import { useEffect, useState } from "react"

const Tiempo = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [mins, setMins] = useState(0);
  const [segs, setSegs] = useState(0);

  const calcularConteo = () => {
    const diferencia = new Date('2023-08-31') - new Date();
    setDias(Math.floor(diferencia / (1000 * 60 * 60 * 24)));
    setHoras(Math.floor((diferencia / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((diferencia / (1000 * 60)) % 60));
    setSegs(Math.floor((diferencia / 1000) % 60))

  }

  useEffect(() => {


    const intervalo = setInterval(() => {
      calcularConteo();
    }, 1000);
    return () => {
      //frena el calculo del intervalo, sino pisa el valor real
      clearInterval(intervalo);
    };

  }, [])

  return (
    <div className="row col-12 tiem">
      <h2>Tiempo restante </h2>
      <div className="row">
        <div className="col letr">
          <p>Dias</p>
          <p className="">{dias}</p>
        </div>
        <div className="col letr">
          <p>Horas</p>
          <p className="">:{horas}</p>
        </div>
        <div className="col letr">
          <p>Minutos</p>
          <p className="">:{mins}</p>
        </div>
        <div className="col letr">
          <p>Segundos</p>
          <p className="">:{segs}</p>
        </div>
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
