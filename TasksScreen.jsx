import { useState, useCallback } from 'react';
import { TASKS, SHOPPING, NOTES } from '../data/mockData';

export function useAppState() {
  const [screen, setScreen] = useState('home');
  const [tasks, setTasks] = useState(TASKS);
  const [shopping, setShopping] = useState(SHOPPING);
  const [notes, setNotes] = useState(NOTES);
  const [notesOpen, setNotesOpen] = useState(false);
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeMode, setComposeMode] = useState('new');

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }, []);

  const toggleShop = useCallback((id) => {
    setShopping(prev => prev.map(s => s.id === id ? { ...s, done: !s.done } : s));
  }, []);

  const toggleNoteFav = useCallback((id) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, fav: !n.fav } : n));
  }, []);

  const addNote = useCallback((text, toWho) => {
    const now = new Date();
    const time = now.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
    const from = toWho === 'mark' ? 'chen' : 'mark';
    setNotes(prev => [
      { id: Date.now(), from, text, date: 'היום', time, fav: false },
      ...prev,
    ]);
  }, []);

  const openCompose = useCallback((mode = 'new') => {
    setComposeMode(mode);
    setComposeOpen(true);
  }, []);

  return {
    screen, setScreen,
    tasks, toggleTask,
    shopping, toggleShop,
    notes, toggleNoteFav, addNote,
    notesOpen, setNotesOpen,
    composeOpen, setComposeOpen,
    composeMode, openCompose,
  };
}
