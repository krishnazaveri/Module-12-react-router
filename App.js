import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import Admin from './Admin';

const Admin = React.lazy(()=>import('./Admin'));
const User = React.lazy(()=>import('./user'))


function App() {
  return (
    <div className="App">

   

   <BrowserRouter>
   <Link to="/admin">Admin </Link>
   <Link to="/user"> User</Link>
   <Routes>
    <Route path="/admin" element={<React.Suspense  fallback={<>...Loading</>}>
      <Admin/>
      
    </React.Suspense>}>

    </Route>

    <Route path="/user" element={<React.Suspense  fallback={<>...Loading uer</>}>
      <User/>
      
    </React.Suspense>}>

    </Route>
   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
