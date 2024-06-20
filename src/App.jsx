import './App.css'
import CoinPage from './pages/CoinPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/dashboard"} element={<DashboardPage/>}/>
      <Route path={"/coin/:id"} element={<CoinPage/>}/>
      {/* <Route path={"/"} element={<HomePage/>}/>  */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
