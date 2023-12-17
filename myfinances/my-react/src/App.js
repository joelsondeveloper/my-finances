import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </Router>
  );
}

export default App;

