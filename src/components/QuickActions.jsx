import React from 'react';
import { Calendar, ClipboardList, Percent, Newspaper } from 'lucide-react';

const actions = [
  {
    label: 'View Exam Timetable',
    icon: Calendar,
    color: '#0047AB',
    onClick: () => alert('Navigate to: ExamScreen'),
  },
  {
    label: 'Track Projects',
    icon: ClipboardList,
    color: '#0047AB',
    onClick: () => alert('Navigate to: ProjectScreen'),
  },
  {
    label: 'Check Attendance',
    icon: Percent,
    color: '#0047AB',
    onClick: () => alert('Navigate to: AttendanceScreen'),
  },
  {
    label: 'University Updates',
    icon: Newspaper,
    color: '#0047AB',
    onClick: () => alert('Navigate to: UpdateScreen'),
  },
];

const QuickActions = () => {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold" style={{ color: '#0047AB' }}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map(({ label, icon: Icon, color, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className="group flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition hover:shadow-md"
              style={{ backgroundColor: '#E8F0FE' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow">
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold" style={{ color: '#0047AB' }}>
                Go
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
