import './App.module.css';
import { Loader } from '../component/indeх';
import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('../views/HomePage'));
const ResumePage = lazy(() => import('../views/ResumePage'));
const PortfolioPage = lazy(() => import('../views/PortfolioPage'));
const ContactPage = lazy(() => import('../views/ContactPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
