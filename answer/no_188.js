function Main() {
    var yearCalendar = [
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
    var yearHappyDayCount = yearCalendar.reduce(function (sum, obj) { return sum + countHappyDay(obj); }, 0);
    console.log(yearHappyDayCount);
}
// 31を渡すと、[1, 2, ... , 31]を作成
function makeFillDaysArray(lastDay) {
    return Array.from({ length: lastDay }).map(function (v, k) { return k + 1; });
}
// 渡されたCalendarの中でHappyDayな日をカウント
function countHappyDay(calendar) {
    return calendar.days.filter(function (day) { return calendar.month === splitSum(day); }).length;
}
// 21を渡すと3（=2+1）を返す。9を渡しても9のまま
function splitSum(day) {
    var sum = day;
    if (day >= 10) {
        sum = String(day).split('').reduce(function (sum, str) { return sum + parseInt(str, 10); }, 0);
    }
    return sum;
}
Main();
