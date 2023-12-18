import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import About from './pages/About';
import SingleMealPage from './pages/SingleMealPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
    <div className='container'>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/meal/:mealId' element={<SingleMealPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </Router>

    </div>
  )
}

export default App
