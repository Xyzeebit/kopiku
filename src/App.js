import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages'
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beans/:id" element={<Details />} />
        <Route path="*" element={<main><h1>404</h1></main>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
