import React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './clock';



document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById('root');
  ReactDOM.render(<Main />, root)  // (Index,hook)
})

const Main = function () {
  return (
    <div> 
      <Clock />

      
    </div>
    
  )
}
