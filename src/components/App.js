
import '../styles/App.css';
import MainInfo from './MainInfo.js';
import WeekDays from './WeekDays.js';
import AllSum from './AllSum.js';
import React, { useState } from 'react';
import uniqid from 'uniqid';

function App() {
  const [weekDays, setWeekDays] = useState(['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag']);
  return (


    <div className='container'>
      <MainInfo/>
      {weekDays.map((day)=>{
        return (
          <WeekDays key={(uniqid())} day={day}/>
        )
      }
      )}
      <AllSum/>
      

      


      


      

    </div>


  );
}

export default App;
