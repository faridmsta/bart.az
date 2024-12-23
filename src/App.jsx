import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import NavigatorMobile from './components/navigatorMobile/NavigatorMobile';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
      <NavigatorMobile/>
      
    </>
  )
}

export default App
