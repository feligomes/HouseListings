export const getMonthYearString = (date) => {
  return date.toLocaleString('default', {month: 'long', year: 'numeric'});
};

export const generateCalendarDays = (date, openHouses) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({date: null});
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = new Date(year, month, day);
    const isToday = dayDate.toDateString() === today.toDateString();
    const isPast = dayDate < today;
    const openHouse = openHouses.find(
      (oh) => {
        const ohDate = new Date(oh.date);
        return ohDate.getUTCFullYear() === year &&
               ohDate.getUTCMonth() === month &&
               ohDate.getUTCDate() === day;
      }
    );

    days.push({
      date: dayDate,
      isToday,
      isPast,
      openHouse,
    });
  }

  return days;
};
