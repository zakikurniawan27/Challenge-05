import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register'
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail'
import AllMovie from './pages/AllMovie/AllMovie';
import Page2 from './pages/AllMovie/Page2';
import Page3 from './pages/AllMovie/Page3';

const App=() => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/seeallmovie' element={<AllMovie/>}/>
      <Route path='/seeallmovie-page2' element={<Page2/>}/>
      <Route path='/seeallmovie-page3' element={<Page3/>}/>
    </Routes>
  );
}

export default App;
