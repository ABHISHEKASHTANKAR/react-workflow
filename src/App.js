import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ModulesPage from './Pages/ModulesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/:id' element = {<ModulesPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
