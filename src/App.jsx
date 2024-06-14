import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hem from './Components/Hem';
const App = () => {
  return (
  <>
  <Header/>
<Routes>
        <Route exact path="/" element={<Hem />} />
       
        <Route path="/contact" element = {<Contact />} />
      </Routes>
  
  </>
  )
}

export default App