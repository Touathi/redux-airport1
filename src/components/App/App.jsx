import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  const reduxStore = useSelector( store => store)
  const airlineArray = useSelector( store => store.airlineArray)
  const airplanes = useSelector( store => store.airplanes)

  const [ newAirline, setNewAirline ] = useState('')
  const [ newAirplanes, setNewAirplanes] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(
            {
              type: 'ADD_AIRLINE',
              payload: newAirline
            }
    )
      setNewAirline('')
  }

  const submitAirplanes = (evt) => {
    evt.preventDefault();
    dispatch(
      {
        type: 'ADD_AIRPLANES',
        payload: newAirplanes
      }
    )
      setNewAirplanes('')
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Airline Name'
          value={newAirline}
          onChange={evt => setNewAirline(evt.target.value)}
        />
        <button type='submit'>Add Airline</button>
      </form>


      <pre>{JSON.stringify(reduxStore)}</pre>
      <p>the array is {reduxStore.airlineArray} </p>

      <table>{/* Airlines should be listed here */}
        <thead>
          <tr>
            <th>
            Airlines
            </th>
          </tr>
        </thead>
        <tbody>
          
           {airlineArray.map((airline, i) => (
            <tr>
            <td key={i}>
              {airline}
            </td>
            </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
