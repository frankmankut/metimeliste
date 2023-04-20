import "../styles/App.css";
import uniqid from "uniqid";
function WeekDays(props) {
  function fastLonn() {
    if (
      props.dayName === "Mandag" ||
      props.dayName === "Tirsdag" ||
      props.dayName === "Onsdag" ||
      props.dayName === "Torsdag"
    ) {
      return "8";
    } else if (props.dayName === "Fredag") {
      return "5.5";
    } else if (props.dayName === "Lørdag" || props.dayName === "Søndag") {
      return "6.5";
    }
  }
  function spiseTid() {
    if (props.dayName === "Lørdag" || props.dayName === "Søndag") {
      return "0.5";
    }
  }
  function overtidFull() {
    if (props.dayName === "Lørdag" || props.dayName === "Søndag") {
      return "7";
    }
  }
  return (
    <div className="rectangle">
      <div className="cell">
        <span>{props.dayName}</span>

        {props.dayIndex === 0 && (
          <button
            type="button"
            onClick={() =>
              props.addDay(props.dayName, {
                isChecked: false,
                id: uniqid(),
                fastLonn: fastLonn(),
                spiseTid: spiseTid(),
                overtidFull: overtidFull(),
                date: "",
                timeStart: "",
                timeStop: "",
                keepONummer: "",
              })
            }
          >
            Legg til en linje
          </button>
        )}

        {props.dayIndex !== 0 && (
          <button type="button" onClick={() => props.removeDay(props.dayName, props.id)}>
            Slett linjen
          </button>
        )}

        <input
          className="inDate"
          name="Date"
          type="date"
          placeholder="dd/mm/yyyy"
          lang="no"
          value={props.date}
          onChange={(e) => props.handleDayDate(props.dayName, props.id, e)}
        ></input>
      </div>
      <div className="cell">
        <input className="oNrmesse" name="oNumer" value={props.oNummer} onChange={(e) => props.keepONummer(props.dayName, props.id, e)}></input>
      </div>
      <div className="cell">
        <input className="oNrmesse" name="Messe"></input>
      </div>
      <div className="cell">
        <input
          type="checkbox"
          className="checkVanlig"
          name="Vanlig"
          checked={props.isChecked}
          onChange={() => props.goVanligDag(props.dayName, props.id)}
        ></input>
      </div>
      <div className="cell">
        <input
          type="time"
          className="tid"
          name="startTid"
          value={props.timeStart}
          onChange={(e) => props.handleTimeStart(props.dayName, props.id, e)}
        ></input>
      </div>
      <div className="cell">
        <input
          type="time"
          className="tid"
          name="sluttidtTid"
          value={props.timeStop}
          onChange={(e) => props.handleTimeStop(props.dayName, props.id, e)}
        ></input>
      </div>
      <div className="cell1">{props.isChecked && props.spiseTid}</div>
      <div className="cell1">{props.isChecked && props.fastLonn}</div>
      <div className="overCell">
        <div className="midCell"></div>
        <div className="midCell1">{props.isChecked && props.overtidFull}</div>
      </div>
      <div className="cell">
        <input type="checkbox" className="checkVanlig" name="Hellig" onClick={() => alert("8 timer")}></input>
      </div>
      <div className="cell">
        <input type="text" className="matNok" name="matNok"></input>&nbsp;
        <label htmlFor="matNok">NOK</label>
      </div>
    </div>
  );
}

export default WeekDays;
