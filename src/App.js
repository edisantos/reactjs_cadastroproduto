import React from 'react'
import NavBar from './Components/Navbas/Index';
import Rotas from './rotas'
import {HashRouter} from 'react-router-dom'
function App() {
  return (
   <HashRouter>
      <div className="container">
            <NavBar/>
            <Rotas/>
        </div>
   </HashRouter>
  
       
   
 
  
  );
}

export default App;
