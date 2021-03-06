import "../stylesheets/App.scss";
import { useState } from "react";
import "../stylesheets/App.scss";
import initialData from "../data/clubslist.json";

function App() {
  //guarda la información de los clubs
  const [data, setData] = useState(initialData);

  //estos sirven para añadir un nuevo club
  const [newName, setNewName] = useState("");
  const [workDays, setWorkDays] = useState(false);
  const [weekEnd, setWeekEnd] = useState(false);

  //manejar nuevonombre
  const handleChangeName = (ev) => {
    setNewName(ev.currentTarget.value);
  };
  //manejar nuevo abreenlaborales
  const handleWorkDays = (ev) => {
    setWorkDays(ev.currentTarget.checked);
  };
  //manejar nuevo abrefindes
  const handleWeekEnd = (ev) => {
    setWeekEnd(ev.currentTarget.checked);
  };
  const handleClick= (ev) =>{
    ev.preventDefault(); 
    //añadir club nuevo
    const newClub = {
    name: newName,
    openOnWeekDays: workDays,
    openOnWeekend: weekEnd,
  };
  setData( [...data, newClub] );
  console.log(data);
 }
 
  

  //aquí dibujo el html de los clubs
  const htmlClubList = data.map((eachClub, index) => (
    <li className="card" key={index}>
      <div className="title">
        <h3>#{index}</h3>
        <h3>{eachClub.name}</h3>
      </div>
      <p>Abre entre semana {(eachClub.openOnWeekdays == true ? "Sí" : "No")}</p>
      <p>Abre entre semana {(eachClub.openOnWeekend == true ? "Sí" : "No")}</p>
    </li>
  ));

  return (
    <div className="App">
      <header>
        <h1>Mis clubs</h1>
        <div className="separator"></div>
      </header>
      <main>
        <ul>{htmlClubList}</ul>

        <section>
          <h2>Añadir un nuevo club</h2>
          <div className="separator"></div>
          <form>
            <input type="text" onChange={handleChangeName} />
            <div>
              <label htmlFor="¿Está abierto entre semana?">
                <input
                  id="estresemana"
                  type="checkbox"
                  onChange={handleWorkDays}
                  value={workDays}
                  name="entresemana"
                />
                Abierto entre semana
              </label>
            </div>
            <div>
              <label htmlFor="finde">
                <input
                  id="finde"
                  type="checkbox"
                  value="finde"
                  name="finde"
                  onChange={handleWeekEnd}
                />
                Abierto los fines de semana
              </label>
            </div>
            <input type="button" value="Guardar" onClick={handleClick} />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
