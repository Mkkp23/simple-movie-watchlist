import './App.css';
import { Route, Routes } from 'react-router-dom';

import AddMovie from './pages/AddMovie';
import ListMovie from './pages/ListMovie';
import Home from './pages/Home';
import Navbar from './Contexts/Navbar';

function App() {

  const pages = [
    { name: "New Movie", path:"/movie/add" },
    { name: "All Movies", path:"/movie/list" },
  ]

  return (
    <>
      <Navbar pages={pages} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/list' element={<ListMovie />} />
        <Route path='/movie/add' element={<AddMovie />} />
      </Routes>
    </>
  )
}

export default App;
