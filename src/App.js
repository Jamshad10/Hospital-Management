import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSignup from './pages/admin/AdminSignup';
import { Route, Routes } from 'react-router-dom';
import AdminHome from './pages/admin/AdminHome';
import AdminLogin from './pages/admin/AdminLogin';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<AdminSignup/>} />
        <Route path='/home' exact element={<AdminHome/>} />
        <Route path='/login' exact element={<AdminLogin/>} />
      </Routes>
    <ToastContainer className='toast-position' position='bottom-right'/>
    </div>
  );
}

export default App;
