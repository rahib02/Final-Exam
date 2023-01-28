
import './App.css';
import Nav from './Page/Nav/Nav';
import {Outlet} from 'react-router-dom'
import Footer from './Page/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
