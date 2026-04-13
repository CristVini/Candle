import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Adicione outras rotas aqui se necessário no futuro */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;