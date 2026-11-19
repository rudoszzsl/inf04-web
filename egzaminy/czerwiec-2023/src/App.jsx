import { useState } from 'react'
import './App.css'

function App() {
  const [tytul, setTytul] = useState('');
  const [rodzaj, setRodzaj] = useState('');;

  function handleSubmit(e){
    e.preventDefault();
    console.log({
      'tytul': tytul,
      'rodzaj': rodzaj 
    })
  }

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="tytul">Tytuł filmu</label>
            <input type="text" name="tytul" id="tytul" className='form-control' value={tytul} onChange={e => setTytul(e.target.value)}/>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="rodzaj">Rodzaj</label>
            <select className='form-control' id='rodzaj' value={rodzaj} onChange={e => setRodzaj(e.target.value)}>
              <option value={""}></option>
              <option value={1}>Komedia</option>
              <option value={2}>Obyczajowy</option>
              <option value={3}>Sensacyjny</option>
              <option value={4}>Horror</option>
            </select>
          </div>
        <button className='btn btn-primary mt-2'>Dodaj</button>
      </form>
    </div>
    </>
  )
}

export default App
