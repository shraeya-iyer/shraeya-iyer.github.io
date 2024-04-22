import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import AboutMe from './routes/AboutMe'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/AboutMe' element= {<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
