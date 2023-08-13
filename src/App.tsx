import React from 'react';
import DrawerAppBar from './components/DrawerAppBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div style={{background:'#121212'}}>
    <DrawerAppBar/>
    <Outlet/>
    </div>
  );
}

export default App;
