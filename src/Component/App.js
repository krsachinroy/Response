import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../CSS/App.css';
import Navbar from './Navbar';
import {Provider} from 'react-redux';
import {store} from '../Redux/store';
function App() { 
  return (
     <Provider store={store}>
      <BrowserRouter>
         <div className="container-fluid" id="containerID">
            <Navbar />
         </div>
      </BrowserRouter>
     </Provider>
  )
}

export default App
