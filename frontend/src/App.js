import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import AddProductComponent from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/addProduct' element={<AddProductComponent />}></Route>
          <Route path='/updateProduct' element={<UpdateProduct />}></Route>
          <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
          <Route path='/sign-up' element={<Signup />}>Sigup</Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
