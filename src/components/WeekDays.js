import '../styles/App.css';

function WeekDays(props) {
    return (
        
            <div className='rectangle'>
                <div className='cell'>
                    <span>{props.day}</span> <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>

                    <input className='inDate' name='Date' type="date" placeholder="dd/mm/yyyy" lang='no'></input>

                </div>
                <div className='cell'>

                    <input className='oNrmesse' name='oNumer'></input>

                </div>
                <div className='cell'>

                    <input className='oNrmesse' name='Messe'></input>

                </div>
                <div className='cell'>

                    <input type="checkbox" className='checkVanlig' name="Vanlig"></input>

                </div>
                <div className='cell'>

                    <input type="time" className='tid' name="startTid"></input>

                </div>
                <div className='cell'>

                    <input type="time" className='tid' name="sluttidtTid"></input>

                </div>
                <div className='cell'></div>
                <div className='cell'></div>
                <div className='overCell'>
                    <div className='midCell'></div>
                    <div className='midCell1'></div>
                </div>
                <div className='cell'>

                    <input type="checkbox" className='checkVanlig' name="Hellig" onClick={() => alert("8 timer")}></input>

                </div>
                <div className='cell'>

                    <input type="text" className='matNok' name='matNok'></input>&nbsp;
                    <label htmlFor="matNok">NOK</label>


                </div>
            </div>


            
        

    )

}

export default WeekDays;