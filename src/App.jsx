import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
        >
          <Route
            index
            element={<Home />} />
          <Route
            path=':category/search/:keyword'
            element={<Catalog />} />
          <Route
            path=':category/:id'
            element={<Detail />} />
          <Route
            path=':category'
            element={<Catalog />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
