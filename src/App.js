import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app' >
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
