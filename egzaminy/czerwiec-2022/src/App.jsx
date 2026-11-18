import { use, useState } from 'react'
import './App.css'

function App() {
  const [tablicaKursów, setTablicaKursów] = useState(['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']);
  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerKursu, setNumerKursu] = useState('');

  function wyswietlWKonsoli(e){
    e.preventDefault();

    console.log(imieNazwisko);
    if(tablicaKursów[numerKursu - 1] === undefined){
      console.log("Nieprawidłowy numer kursu");
    }
    else{
      console.log(tablicaKursów[numerKursu - 1]);
    }
  }

  return (
    <>
      <div className="container p-5">
        <h2>Liczba kursów {tablicaKursów.length}</h2>

        <ol>
          {tablicaKursów.map(kurs => (
            <li key={kurs}>{kurs}</li>
          ))}
        </ol>

        <form>
          <div className="form-group mt-4">
            <label htmlFor="imieNazwisko" className='input'>Imię i nazwisko:</label>
            <input type="text" name="imieNazwisko" className='form-control' value={imieNazwisko} onChange={e => setImieNazwisko(e.target.value)}/>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="numerKursu">Numer kursu: </label>
            <input type="number" className='form-control' name="numerKursu" value={numerKursu} onChange={e => setNumerKursu(e.target.value)}/>
          </div>

          <button className='btn btn-primary mt-4' onClick={wyswietlWKonsoli}>Zapisz do kursu</button>
        </form>
      </div>
    </>
  )
}

//Rzeczy których nie pamiętałem:
/*
- obsluga onChange w React
- e.preventDefault gdzie dac
*/

export default App
