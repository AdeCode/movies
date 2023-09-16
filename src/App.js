import Homepage from './Homepage';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Homepage/>
            <Footer/>
            </>
          }/>
          <Route path='/movie/:id/details' element={<MovieDetails/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
