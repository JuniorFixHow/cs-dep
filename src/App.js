import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Short from './pages/courses/short/Short';
import Catalog from './pages/catalog/Catalog';
import Events from './pages/events/Events';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <div className='app' >
      <Header />
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='short-courses' element={<Short />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='events' element={<Events />} />
          <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
