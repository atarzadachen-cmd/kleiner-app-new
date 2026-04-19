import React, { useState } from 'react';
import { EVENTS, CALENDAR_EVENT_DAYS, HEB_MONTHS } from '../data/mockData';

function buildCalendar() {
  const n = new Date();
  const year = n.getFullYear(), month = n.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { year, month, today: n.getDate(), firstDay, daysInMonth };
}

export default function CalendarScreen() {
  const { year, month, today, firstDay, daysInMonth } = buildCalendar();
  const [selected, setSelected] = useState(today);

  const empties = Array(firstDay).fill(null);
  const days    = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="screen" style={{ background: 'rgba(12,6,30,0.97)', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)' }}>
      <div className="ss-topbar">
        <div className="ss-title">📅 לוח שנה</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)', marginTop: 4 }}>
          {HEB_MONTHS[month]} {year}
        </div>
      </div>

      <div className="s-body" style={{ paddingTop: 8 }}>
        {/* Calendar Grid */}
        <div className="glass" style={{ margin: '0 20px', padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', direction: 'rtl', marginBottom: 6 }}>
            {['א','ב','ג','ד','ה','ו','ש'].map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', padding: '3px 0' }}>{d}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', direction: 'rtl', gap: 3 }}>
            {empties.map((_, i) => <div key={'e'+i} />)}
            {days.map(d => {
              const isToday    = d === today;
              const hasEvent   = CALENDAR_EVENT_DAYS.includes(d);
              const isSelected = d === selected;
              return (
                <div key={d} onClick={() => setSelected(d)} style={{
                  aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', fontSize: 13, fontWeight: isToday ? 800 : 500,
                  cursor: 'pointer', position: 'relative', transition: 'all 0.15s',
                  color: isToday ? '#fff' : isSelected ? '#fff' : 'rgba(255,255,255,0.6)',
                  background: isToday
                    ? 'linear-gradient(135deg,var(--pur),var(--pur-deep))'
                    : isSelected ? 'rgba(123,94,167,0.4)' : 'transparent',
                  boxShadow: isToday ? '0 4px 14px rgba(123,94,167,0.5)' : 'none',
                }}>
                  {d}
                  {hasEvent && <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: isToday ? '#fff' : '#C084FC' }} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events list */}
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', padding: '16px 20px 6px', letterSpacing: '0.5px' }}>אירועים החודש</div>
        <div className="glass" style={{ margin: '0 20px', overflow: 'hidden' }}>
          {EVENTS.map((ev, i) => (
            <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 15px', borderBottom: i < EVENTS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: ev.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)', fontWeight: 600 }}>{ev.title}</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{ev.fullDay ? 'כל היום' : ev.time}</div>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: ev.color }}>{ev.label}</span>
            </div>
          ))}
        </div>

        <button className="add-btn">＋ הוסף אירוע</button>
      </div>
    </div>
  );
}
