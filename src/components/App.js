
import '../styles/App.css';
import MainInfo from './MainInfo.js';
import WeekDays from './WeekDays.js';
import AllSum from './AllSum.js';
import React, { useState } from 'react';
import uniqid from 'uniqid';

function App() {
  const [weekDays, setWeekDays] = useState([{ Mandag: [{}] }, { Tirsdag: [{}] }, { Onsdag: [{}] }, { Torsdag: [{}] }, { Fredag: [{}] }, { Lørdag: [{}] }, { Søndag: [{}] },]);

  function addDay(day, dayCell) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0]
        newWeekDay.push(dayCell)
        return { [day]: newWeekDay }
      } else {
        return dayx
      }

    })
    setWeekDays(newWeekDays)
    

  }

  function removeDay(day, id) {
    const newWeekDays = weekDays.map((dayx) => {
      if (Object.keys(dayx)[0] === day) {
        const newWeekDay = Object.values(dayx)[0].filter((dayy) => dayy.id !== id)
        return { [day]: newWeekDay }
      } else {
        return dayx
      }
    })
    setWeekDays(newWeekDays)
  }
  return (


    <div className='container'>
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
            />
          )
        })
      }
      )}
      <AllSum />










    </div>


  );
}

export default App;
