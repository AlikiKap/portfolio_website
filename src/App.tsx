import React from 'react';
import DrawerAppBar from './components/DrawerAppBar';
import Home from './pages/Home';
import Projects from './Projects';


function App() {
  return (
    <div style={{background:'#121212'}}>
    <DrawerAppBar/>
    <Home/>
    <Projects/>
    </div>
  );
}

export default App;
