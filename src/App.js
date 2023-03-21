
import './App.css';

function App() {
  return (
    
   
      <div className='container'>
      
        <div className='metimelogo'> 
          <h1> Timeliste Messehallen Elektriske AS</h1>
        </div>

        <div className='uke'>
          
          <form>
          Ukenummer -  <input type="week" name="inUke" className='inUke'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Montør navn -  <input className='mNavn' name='mNavn'></input>
          </form>
                
        </div>

        <div className='rectangle'>
          <div className='cell'>Dager i uke <br/>Dato</div>
          <div className='cell'>Ordrenummer</div>
          <div className='cell'>Messer</div>
          <div className='cell'>Vanlig dag</div>
          <div className='cell'>Starttid</div>
          <div className='cell'>Sluttid</div>
          <div className='cell'>Spisetid</div>
          <div className='cell'>Fastlønn</div>
          <div className='cell'>Overtid <br/>
            <div className='miniCell'>50%</div>
            <div className='miniCell'>100%</div> 
          </div>
          <div className='cell'>Helligdag</div>
          <div className='cell'>Mat</div>
        </div>


        <div className='rectangle'>
          <div className='cell'> 
            Mandag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
              <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
              NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
            Tirsdag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
              <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" ></input>
            </form>
            </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
             NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
            Onsdag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
              <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
              <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
              NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
            Torsdag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
	           <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form></div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
           <form>
	            <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
              NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
           Fredag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
	            <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	           <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
         </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
              NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
            Lørdag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
	            <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input className='matNok' name='mat'></input>&nbsp;
              NOK
            </form>
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>
            Søndag <button type='button' onClick={() => alert("En ny linje dukker opp.")}>Legg til en linje</button>
            <form>
	            <input className='inDate' name='Date' type="date"  placeholder="dd/mm/yyyy" lang='no'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='oNumer'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='oNrmesse' name='Messe'></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Vanlig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="startTid"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
              <input type="time" className='tid' name="sluttidtTid"></input>
            </form>
          </div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'>
            <form>
	            <input type="checkbox" className='checkVanlig' name="Hellig"></input>
            </form>
          </div>
          <div className='cell'>
            <form>
	            <input className='matNok' name='mat'></input>&nbsp;
             NOK
            </form>
          
          </div>
        </div>


        <div className='rectangle'>
          <div className='cell'>Sum</div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='overCell'>
            <div className='midCell'></div>
            <div className='midCell1'></div> 
          </div>
          <div className='cell'></div>
          <div className='cell'>NOK</div>
        </div>

      </div>

      
  );
}

export default App;
