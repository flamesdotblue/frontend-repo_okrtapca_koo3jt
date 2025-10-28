import React from 'react';
import HeaderBar from './components/HeaderBar';
import HeroCover from './components/HeroCover';
import SummaryCards from './components/SummaryCards';
import QuickActions from './components/QuickActions';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8F0FE' }}>
      <HeaderBar />
      <HeroCover />
      <SummaryCards />
      <QuickActions />

      <footer className="mx-auto mt-10 max-w-6xl px-4 pb-10 pt-6 text-center text-sm text-slate-500 sm:px-6">
        Built for students. Smart. Simple. On time.
      </footer>
    </div>
  );
}

export default App;
