// ============================================================
// EDIT THIS FILE TO ADD/REMOVE UPCOMING SESSIONS
// Each event needs: date, time, session type, spots left, and
// a link to your booking form (Google Forms, Typeform, etc.)
// ============================================================

export interface Event {
  id: string;
  date: string;        // ISO date: "2026-04-12"
  time: string;        // e.g. "19:00 – 21:30"
  titleKey: string;    // matches a translation key for the session name
  spotsTotal: number;
  spotsTaken: number;
  bookingUrl: string;  // link to your Google Form / Typeform / etc.
}

const events: Event[] = [
  {
    id: "1",
    date: "2026-04-12",
    time: "19:00 – 21:30",
    titleKey: "drawMe",
    spotsTotal: 6,
    spotsTaken: 2,
    bookingUrl: "https://forms.gle/YOUR_FORM_ID_HERE",
  },
  {
    id: "2",
    date: "2026-04-26",
    time: "19:00 – 22:00",
    titleKey: "openStudio",
    spotsTotal: 6,
    spotsTaken: 0,
    bookingUrl: "https://forms.gle/YOUR_FORM_ID_HERE",
  },
  {
    id: "3",
    date: "2026-05-10",
    time: "18:30 – 21:00",
    titleKey: "creativeFirsts",
    spotsTotal: 6,
    spotsTaken: 4,
    bookingUrl: "https://forms.gle/YOUR_FORM_ID_HERE",
  },
  {
    id: "4",
    date: "2026-05-24",
    time: "19:00 – 21:30",
    titleKey: "stillLifeSlowdown",
    spotsTotal: 6,
    spotsTaken: 1,
    bookingUrl: "https://forms.gle/YOUR_FORM_ID_HERE",
  },
];

export default events;
