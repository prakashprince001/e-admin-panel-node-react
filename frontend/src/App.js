import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Dashboard Component</h1>}></Route>
          <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
          <Route path='/addProduct' element={<h1>Add Product Component</h1>}></Route>
          <Route path='/updateProduct' element={<h1>Update Product Component</h1>}></Route>
          <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
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
