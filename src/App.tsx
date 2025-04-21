import DrawerAppBar from './components/DrawerAppBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Grid } from '@mui/material';



function App() {
  return (
    <>
      <div style={{ background: '#121212' }}>
        <DrawerAppBar />
        <Home />
        <Footer />
      </div>
    </>

  );
}

export default App;
