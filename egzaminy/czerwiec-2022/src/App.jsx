import { useState } from 'react'
import './App.css'

function App() {
  /* Błąd 4: polskie znaki w useState [tablicaKursów, ...] => [tablicaKursow, ...]*/
  const [tablicaKursow, setTablicaKursow] = useState(['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']);
  const [imieNazwisko, setImieNazwisko] = useState('');
  const [numerKursu, setNumerKursu] = useState('');

  function wyswietlWKonsoli(e){
    e.preventDefault();

    console.log(imieNazwisko);
    if(tablicaKursow[numerKursu - 1] === undefined){
      console.log("Nieprawidłowy numer kursu");
    }
    else{
      console.log(tablicaKursow[numerKursu - 1]);
    }
  }

  return (
    <>
      <div className="container p-5">
        <h2>Liczba kursów: {tablicaKursow.length}</h2> {/* Błąd 1: Brak dwukropka przy 'Liczba kursów' */}

        <ol>
          {tablicaKursow.map(kurs => (
            <li key={kurs}>{kurs}</li>
          ))}
        </ol>


         {/* Błąd 2: Brak ustawionego id w inputach */}
         {/* Błąd 3: onSubmit na formularz a nie na button */}
        <form onSubmit={wyswietlWKonsoli}>
          <div className="form-group mt-4">
            <label htmlFor="imieNazwisko" className='input'>Imię i nazwisko:</label>
            <input type="text" name="imieNazwisko" className='form-control' id='imieNazwisko' value={imieNazwisko} onChange={e => setImieNazwisko(e.target.value)}/>
          </div>
          <div className="form-group mt-4">
            <label htmlFor="numerKursu">Numer kursu: </label>
            <input type="number" className='form-control' name="numerKursu" id='numerKursu' value={numerKursu} onChange={e => setNumerKursu(e.target.value)}/>
          </div>

          <button className='btn btn-primary mt-4'>Zapisz do kursu</button>
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
