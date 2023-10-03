import DrawerAppBar from './components/DrawerAppBar';
import Home from './pages/Home';
import Projects from './Projects';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div style={{ background: '#121212' }}>
        <DrawerAppBar />
        <Home />
        <Projects />
        <Footer />
      </div>
    </>

  );
}

export default App;
