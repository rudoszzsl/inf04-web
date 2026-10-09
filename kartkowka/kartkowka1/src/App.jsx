import { useRef } from 'react'
import { Pozycja } from './components/Pozycja';

const komunikatBledu = "Nieprawidłowy numer zawodu";

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
          <label className='form-label'>Numer zawodu:</label>
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
