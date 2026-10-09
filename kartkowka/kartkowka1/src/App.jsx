import { useRef } from 'react'
import { Pozycja } from './components/Pozycja';

function App() {
  const imieRef = useRef(null);
  const numerRef = useRef(null);

  const zawody = [
    "Programista",
    "Lekarz",
    "Nauczyciel",
    "Kucharz",
    "Fryzjer",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const imie = imieRef.current.value;
    const numerZawodu = numerRef.current.value;

    console.log(`Imię i nazwisko: ${imie}`);
    console.log(`Numer: ${numerZawodu}`);


    const index = Number(numerZawodu) - 1;
    if(zawody[index] !== undefined){
      console.log(zawody[index]);
    }
    else{
      console.log("Nieprawidłowy numer zawodu");
    }
  }

  return (
    <>
    <div className='p-4'>
      <h2>Liczba zawodów: {zawody.length}</h2>
      <ol>
      {zawody.map((pozycja, index) => (
        <Pozycja key={index} nazwa={pozycja}></Pozycja>
      ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Imię i nazwisko:</label>
          <input ref={imieRef} className='form-control' type='text' ></input>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Numer zawodu:</label>
          <input ref={numerRef} className='form-control' type='number'></input>
        </div>

        <button className='btn btn-primary' type='submit'>Zatwierdź wybór</button>
      </form>
    </div>
    </>
  )
}

export default App
