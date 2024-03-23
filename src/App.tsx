import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CadastroMedico from './pages/CadastroMedico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/cadastro-medico" />} />
        <Route path="/cadastro-medico" element={<CadastroMedico />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
