import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [firstColor, setFirstColor] = useState("#6b1f7a");
  const [secondColor, setSecondColor] = useState("#5fc4dd");
  const [direction, setDirection] = useState("to right")
  
  return (
    <div className="app" style={{backgroundImage: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`}}>
      <div className='main-container'>
          <h1>Background Color Picker</h1>
          <div>
          <div className='select-button'>
            <div className="select-direction">
              <select className="select" onChange={(e) => setDirection(e.target.value)}>
                  <option>to right</option>
                  <option>to left</option>
                  <option>to bottom</option>
                  <option>to top</option>
                  <option>to bottom right</option>
                  <option>to bottom left</option>
                  <option>to top right</option>
                  <option>to top left</option>
              </select>
            </div>
            <div className="button-container">
              <input type="color" onChange={(e) => {setFirstColor(e.target.value)}}/>
              <input type="color" onChange={(e) => {setSecondColor(e.target.value)}}/>
            </div>
          </div>
          <p>linear-gradient({direction}, {firstColor} , {secondColor})</p>
          <p className='copy'>Copy the line above and paste as in your background-image css</p>
          </div>
      </div>
    </div>
  )
}

export default App
