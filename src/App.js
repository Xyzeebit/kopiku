import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages'
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beans/:id" element={<Details />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
