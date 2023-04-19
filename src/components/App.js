import "../styles/App.css";
import MainInfo from "./MainInfo.js";
import WeekDays from "./WeekDays.js";
import AllSum from "./AllSum.js";
import React, { useState } from "react";
import uniqid from "uniqid";

function App() {
  const [weekDays, setWeekDays] = useState([
    { Mandag: [{ isChecked: false, id: uniqid(), fastLonn: "8", spiseTid: "", overtidFull: "", date: "" }] },
    { Tirsdag: [{ isChecked: false, id: uniqid(), fastLonn: "8", spiseTid: "", overtidFull: "", date: "" }] },
    { Onsdag: [{ isChecked: false, id: uniqid(), fastLonn: "8", spiseTid: "", overtidFull: "", date: "" }] },
    { Torsdag: [{ isChecked: false, id: uniqid(), fastLonn: "8", spiseTid: "", overtidFull: "", date: "" }] },
    { Fredag: [{ isChecked: false, id: uniqid(), fastLonn: "5.5", spiseTid: "", overtidFull: "", date: "" }] },
    { Lørdag: [{ isChecked: false, id: uniqid(), fastLonn: "6.5", spiseTid: "0.5", overtidFull: "7", date: "" }] },
    { Søndag: [{ isChecked: false, id: uniqid(), fastLonn: "6.5", spiseTid: "0.5", overtidFull: "7", date: "" }] },
  ]);

  function addDay(day, dayCell) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0];
        newWeekDay.push(dayCell);
        return { [day]: newWeekDay };
      } else {
        return dayx;
      }
    });
    setWeekDays(newWeekDays);
  }

  function removeDay(day, id) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0].filter((dayy) => dayy.id !== id);
        return { [day]: newWeekDay };
      } else {
        return dayx;
      }
    });
    setWeekDays(newWeekDays);
  }
  function goVanligDag(day, id) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0].map((dayy) => {
          if (dayy.id === id){
            return {...dayy, isChecked: dayy.isChecked === false ? true : false };
          } else {
            return dayy;
          }
        }) 
        return { [day]: newWeekDay };
      } else {
        return dayx;
      }
    });
    setWeekDays(newWeekDays);
  }

  function handleDayDate(day, id, value) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0].map((dayy) => {
          if (dayy.id === id){
            return { ...dayy, date: value.target.value };
          } else {
            return dayy;
          }
        }) 
        return { [day]: newWeekDay };
      } else {
        return dayx;
      }
    });
    setWeekDays(newWeekDays);
  }

  return (
    <div className="container">
      <MainInfo />
      {weekDays.map((day) => {
        return Object.values(day)[0].map((days) => {
          return (
            <WeekDays
              key={uniqid()}
              dayIndex={Object.values(day)[0].indexOf(days)}
              dayName={Object.keys(day)[0]}
              id={days.id}
              addDay={addDay}
              removeDay={removeDay}
              isChecked={days.isChecked}
              goVanligDag={goVanligDag}
              fastLonn={days.fastLonn}
              spiseTid={days.spiseTid}
              overtidFull={days.overtidFull}
              date={days.date}
              handleDayDate={handleDayDate}
            />
          );
        });
      })}
      <AllSum />
    </div>
  );
}

export default App;
