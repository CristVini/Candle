import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Science from './pages/Science';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/science" element={<Science />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;