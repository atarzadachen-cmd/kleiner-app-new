export const FAMILY = {
  name: 'קליינר',
  members: [
    { id: 'mark', name: 'מארק', role: 'אבא', emoji: '👨' },
    { id: 'chen', name: 'חן',  role: 'אמא', emoji: '👩' },
  ],
};

export const KIDS = [
  {
    id: 'rom',
    name: 'רום',
    birthdate: '2019-05-07',
    color: '#F4A261',
    colorBg: 'rgba(244,162,97,0.18)',
    colorBorder: 'rgba(244,162,97,0.3)',
    stars: 3,
    tasks: 3,
    events: 2,
  },
  {
    id: 'niv',
    name: 'ניב',
    birthdate: '2021-01-07',
    color: '#C084FC',
    colorBg: 'rgba(192,132,252,0.18)',
    colorBorder: 'rgba(192,132,252,0.3)',
    stars: 4,
    tasks: 2,
    events: 3,
  },
  {
    id: 'eli',
    name: 'אלי',
    birthdate: '2024-03-27',
    color: '#60D4A0',
    colorBg: 'rgba(96,212,160,0.18)',
    colorBorder: 'rgba(96,212,160,0.3)',
    stars: 2,
    tasks: 1,
    events: 2,
  },
];

export const EVENTS = [
  { id: 1, title: 'גן ילדים – רום',         time: '08:30', kid: 'rom',  color: '#F4A261', label: 'רום'  },
  { id: 2, title: 'פגישת עבודה – מרק',      time: '10:00', kid: null,   color: '#A98FCC', label: 'מרק'  },
  { id: 3, title: 'חוג שחייה – ניב',        time: '14:00', kid: 'niv',  color: '#C084FC', label: 'ניב'  },
  { id: 4, title: 'בדיקת רופא – אלי',       time: '17:30', kid: 'eli',  color: '#60D4A0', label: 'אלי'  },
  { id: 5, title: 'ארוחת ערב משפחתית',      time: '19:00', kid: null,   color: '#FFD166', label: 'כולם' },
  { id: 6, title: 'יום הולדת סבתא',         time: '',      kid: null,   color: '#F72585', label: 'משפחה', fullDay: true },
];

export const TASKS = [
  { id: 1, text: 'לאסוף את רום מהגן',       assignee: 'מרק',   filter: 'mark', done: false },
  { id: 2, text: 'להזמין תרופות לאלי',      assignee: 'חן',    filter: 'chen', done: true  },
  { id: 3, text: 'לשלם חשבון עירייה',       assignee: 'חן',    filter: 'chen', done: false },
  { id: 4, text: 'לסדר את חדר הילדים',      assignee: 'שניהם', filter: 'both', done: false },
  { id: 5, text: 'להכין שיעורים עם ניב',    assignee: 'מרק',   filter: 'mark', done: false },
  { id: 6, text: 'להזמין מתנה לסבתא',       assignee: 'חן',    filter: 'chen', done: false },
  { id: 7, text: 'לשלם מנוי חדר כושר',      assignee: 'מרק',   filter: 'mark', done: false },
];

export const SHOPPING = [
  { id: 1,  emoji: '🥛', name: 'חלב',              sub: 'תנובה 3%',   qty: 'x2',    cat: 'dairy',   done: false },
  { id: 2,  emoji: '🧀', name: 'גבינה צהובה',      sub: '28%',        qty: 'x1',    cat: 'dairy',   done: false },
  { id: 3,  emoji: '🥚', name: 'ביצים',             sub: 'גודל L',     qty: 'x12',   cat: 'dairy',   done: false },
  { id: 4,  emoji: '🍞', name: 'לחם',               sub: 'קמח מלא',    qty: 'x1',    cat: 'bakery',  done: true  },
  { id: 5,  emoji: '🥐', name: 'קרואסון',           sub: 'חמאה',       qty: 'x4',    cat: 'bakery',  done: false },
  { id: 6,  emoji: '🍌', name: 'בננות',             sub: 'אורגני',     qty: 'x6',    cat: 'produce', done: false },
  { id: 7,  emoji: '🧴', name: 'שמפו לתינוקות',    sub: "ג'ונסון",    qty: 'x1',    cat: 'baby',    done: false },
  { id: 8,  emoji: '🧻', name: 'טישו רטוב',         sub: 'לתינוקות',   qty: 'x2',    cat: 'baby',    done: false },
  { id: 9,  emoji: '🥦', name: 'ברוקולי',           sub: 'טרי',        qty: 'x1',    cat: 'produce', done: false },
  { id: 10, emoji: '🍅', name: 'עגבניות שרי',       sub: '500 גרם',    qty: 'x1',    cat: 'produce', done: false },
];

export const NOTES = [
  { id: 1, from: 'chen', text: 'אני אוהבת אותך, אל תשכח לחייך היום ✨',                        date: 'היום',       time: '08:35', fav: false },
  { id: 2, from: 'mark', text: 'בוקר טוב אהובה, שיהיה לך יום מקסים ❤️',                        date: 'היום',       time: '08:12', fav: true  },
  { id: 3, from: 'mark', text: 'ישנת טוב? חשבתי עליך כל היום 🌙',                              date: 'אתמול',      time: '21:05', fav: false },
  { id: 4, from: 'chen', text: 'מאחלת לך יום רגוע ומלא אנרגיה, אתה הכי מיוחד 💫',             date: 'אתמול',      time: '07:50', fav: true  },
  { id: 5, from: 'mark', text: 'כל דבר יפה שאני רואה מזכיר לי אותך 🌸',                        date: 'לפני יומיים', time: '08:00', fav: false },
  { id: 6, from: 'chen', text: 'תודה שאתה הבעל והאבא הכי טוב בעולם 🥹',                        date: 'לפני יומיים', time: '22:15', fav: true  },
];

export const CALENDAR_EVENT_DAYS = [7, 10, 14, 19, 22, 25, 28];

export const HEB_MONTHS = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
export const HEB_DAYS   = ['יום ראשון','יום שני','יום שלישי','יום רביעי','יום חמישי','יום שישי','שבת'];
