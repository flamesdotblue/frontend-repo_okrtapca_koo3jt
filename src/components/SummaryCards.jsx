import React from 'react';
import { Calendar, ClipboardList, Percent, Newspaper } from 'lucide-react';

const cards = [
  {
    title: 'Upcoming Exams',
    value: '3',
    icon: Calendar,
    accent: 'from-blue-500/15 to-blue-500/5',
  },
  {
    title: 'Projects Due',
    value: '2',
    icon: ClipboardList,
    accent: 'from-amber-500/15 to-amber-500/5',
  },
  {
    title: 'Attendance %',
    value: '87%',
    icon: Percent,
    accent: 'from-emerald-500/15 to-emerald-500/5',
  },
  {
    title: 'New Updates',
    value: '5',
    icon: Newspaper,
    accent: 'from-indigo-500/15 to-indigo-500/5',
  },
];

const SummaryCards = () => {
  return (
    <section className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
      {cards.map(({ title, value, icon: Icon, accent }) => (
        <div
          key={title}
          className={`relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md`}
        >
          <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${accent}`} />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">{title}</p>
              <p className="mt-1 text-2xl font-bold" style={{ color: '#0047AB' }}>
                {value}
              </p>
            </div>
            <div className="rounded-lg border bg-white/60 p-2">
              <Icon className="h-5 w-5 text-slate-600" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;
