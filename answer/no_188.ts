type Calendar = { month: number, days: number[] };

function Main(): void {
  const yearCalendar: Calendar[] = [
    { month: 1, days: makeFillDaysArray(31) },
    { month: 2, days: makeFillDaysArray(28) },
    { month: 3, days: makeFillDaysArray(31) },
    { month: 4, days: makeFillDaysArray(30) },
    { month: 5, days: makeFillDaysArray(31) },
    { month: 6, days: makeFillDaysArray(30) },
    { month: 7, days: makeFillDaysArray(31) },
    { month: 8, days: makeFillDaysArray(31) },
    { month: 9, days: makeFillDaysArray(30) },
    { month: 10, days: makeFillDaysArray(31) },
    { month: 11, days: makeFillDaysArray(30) },
    { month: 12, days: makeFillDaysArray(31) }
  ];

  // monthごとに、daysごとにそのdayをsplitして、それのsumがmonthと等しいか確認
  const yearHappyDayCount = yearCalendar.reduce( (sum: number, obj: Calendar) => sum + countHappyDay(obj), 0);
  console.log(yearHappyDayCount);
}

// 31を渡すと、[1, 2, ... , 31]を作成
function makeFillDaysArray(lastDay: number): number[] {
  return Array.from({ length: lastDay }).map( (v, k) => k+1);
}

// 渡されたCalendarの中でHappyDayな日をカウント
function countHappyDay(calendar: Calendar): number {
  return calendar.days.filter( day => calendar.month === splitSum(day) ).length;
}

// 21を渡すと3（=2+1）を返す。9を渡しても9のまま
function splitSum(day: number): number {
  let sum = day;
  if (day >= 10) {
    sum = String(day).split('').reduce((sum, str) => sum + parseInt(str, 10), 0);
  }
  return sum;
}

Main();