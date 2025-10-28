import React from 'react';
import { GraduationCap, Bell } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg shadow"
            style={{ backgroundColor: '#0047AB' }}
          >
            <GraduationCap className="h-6 w-6" color="#FFD700" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold" style={{ color: '#0047AB' }}>
              Campus Companion
            </p>
            <p className="text-xs text-slate-500">Stay ahead with smart reminders</p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Bell className="h-4 w-4" />
          Alerts
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
