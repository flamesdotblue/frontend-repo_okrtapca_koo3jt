import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full" style={{ backgroundColor: '#E8F0FE' }}>
      <div className="relative h-[480px] w-full overflow-hidden rounded-b-3xl shadow-lg">
        {/* 3D Spline Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient overlays for readability (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#E8F0FE] to-transparent" />

        {/* Foreground content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl">
            <h1
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
              style={{ color: '#0047AB' }}
            >
              Welcome to Campus Companion
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700">
              A smart academic assistant that brings your exams, projects, attendance, and university updates into one organized hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
