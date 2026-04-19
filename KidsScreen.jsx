import React from 'react';
import { useAppState } from './hooks/useAppState';
import { IMG_BG } from './data/images';

import BottomNav      from './components/BottomNav';
import HomeScreen     from './components/HomeScreen';
import CalendarScreen from './components/CalendarScreen';
import TasksScreen    from './components/TasksScreen';
import ShoppingScreen from './components/ShoppingScreen';
import KidsScreen     from './components/KidsScreen';
import NotesOverlay   from './components/NotesOverlay';
import ComposeOverlay from './components/ComposeOverlay';

export default function App() {
  const state = useAppState();

  return (
    <>
      {/* Background photo */}
      <div className="app-bg" style={{ backgroundImage: `url('${IMG_BG}')` }} />

      {/* App shell */}
      <div className="app-shell">
        {state.screen === 'home'     && <HomeScreen     state={state} />}
        {state.screen === 'calendar' && <CalendarScreen />}
        {state.screen === 'tasks'    && <TasksScreen    tasks={state.tasks}    onToggle={state.toggleTask} />}
        {state.screen === 'shopping' && <ShoppingScreen shopping={state.shopping} onToggle={state.toggleShop} />}
        {state.screen === 'kids'     && <KidsScreen />}
      </div>

      {/* Overlays */}
      {state.notesOpen && (
        <NotesOverlay
          notes={state.notes}
          onClose={() => state.setNotesOpen(false)}
          onToggleFav={state.toggleNoteFav}
          onCompose={state.openCompose}
        />
      )}
      {state.composeOpen && (
        <ComposeOverlay
          onClose={() => state.setComposeOpen(false)}
          onSend={state.addNote}
        />
      )}

      {/* Bottom nav (always visible) */}
      <BottomNav screen={state.screen} onNavigate={state.setScreen} />

      {/* FAB */}
      <button className="fab">＋</button>
    </>
  );
}
