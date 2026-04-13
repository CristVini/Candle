import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Science from './pages/Science';
import IngredientsLibrary from './pages/IngredientsLibrary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-serif">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tighter text-stone-800">
              CANDLE<span className="text-amber-600">MIND</span>
            </Link>
            <div className="flex gap-4 md:gap-8 text-sm font-medium uppercase tracking-widest text-stone-500">
              <Link to="/science" className="hover:text-amber-600 transition-colors">Ciência</Link>
              <Link to="/ingredients" className="hover:text-amber-600 transition-colors">Ingredientes</Link>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/science" element={<Science />} />
            <Route path="/ingredients" element={<IngredientsLibrary />} />
          </Routes>
        </main>

        <footer className="bg-stone-100 py-12 border-t border-stone-200">
          <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
            <p>© 2024 CandleMind. A ciência do bem-estar através do aroma.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;