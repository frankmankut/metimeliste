import '../styles/App.css';

function MainInfo() {
    return (
        <>
            <div className='metimelogo'>
                <h1> Timeliste Messehallen Elektriske AS</h1>
            </div>

            <div className='uke'>


                <span>Ukenummer -</span> <input type="week" name="inUke" className='inUke'></input>
                <span>Montør navn -</span> <input className='mNavn' name='mNavn'></input>


            </div>
            <div className='rectangle'>
                <div className='cell'><p>Dager i uke</p> <span>Dato</span></div>
                <div className='cell'>Ordrenummer</div>
                <div className='cell'>Messer</div>
                <div className='cell'>Vanlig dag</div>
                <div className='cell'>Starttid</div>
                <div className='cell'>Sluttid</div>
                <div className='cell'>Spisetid</div>
                <div className='cell'>Fastlønn</div>
                <div className='cell'>Overtid <br />
                    <div className='miniCell'>50%</div>
                    <div className='miniCell'>100%</div>
                </div>
                <div className='cell'>Helligdag</div>
                <div className='cell'>Mat</div>
            </div>
        </>

    )

}

export default MainInfo;