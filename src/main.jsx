import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='flex min-h-screen flex-col'>
      <Header />
      <Main />
      <Footer />
    </main>
  </StrictMode>,
);
