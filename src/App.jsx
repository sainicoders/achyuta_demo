
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Api_int from './pages/Api_int';



import './App.css'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Api_int/>} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </Router>  
     
       
    </>
  )
}

export default App
