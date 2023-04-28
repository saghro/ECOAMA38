
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/register' exact Component={Register}/>
          <Route path='/bookingcar' exact Component={BookingCar}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
