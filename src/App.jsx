import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
