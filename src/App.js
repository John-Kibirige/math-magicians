/* eslint-disable  */
import './App.css';
import Calculator from './components/Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SharedComponent } from './components/SharedComponent';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedComponent />}>
            <Route index element={<Home />} />
            <Route path='calculator' element={<Calculator />} />
            <Route path='quote' element={<Quote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
