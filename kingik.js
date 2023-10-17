const people = ["태중", "시진", "재민", "현민", "준수", "현택"];
let today = 0;

// 오늘의 빨퇴
const todayWinners = document.getElementsByName("today_winner");
for (i = 0; i < 2; i++) {
  console.log(todayWinners[i].innerText);
}

// 이번주 사이클
const thisWeekCyclePeople = document.getElementsByName("cycle_winner");
for (i = 0; i < 2; i++) {
  console.log(thisWeekCyclePeople[i].innerText);
}

// 이번주에 가는 인원
const dowWinners = document.getElementsByName("dow-winner");
for (i = 0; i < 10; i++) {
  console.log(dowWinners[i].innerText);
}

// 오늘 요일
function getTodayLabel() {
  var week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

  var today = new Date().getDay();
  var todayLabel = week[today];

  return todayLabel;
}

let dayOfWeek = getTodayLabel();
console.log(dayOfWeek);
switch (dayOfWeek) {
  case "Mon":
    todayWinners[0].innerText = dowWinners[0].innerText;
    todayWinners[1].innerText = dowWinners[1].innerText;
    break;
  case "Tue":
    todayWinners[0].innerText = dowWinners[2].innerText;
    todayWinners[1].innerText = dowWinners[3].innerText;
    break;
  case "Wed":
    todayWinners[0].innerText = dowWinners[4].innerText;
    todayWinners[1].innerText = dowWinners[5].innerText;
    break;
  case "Thu":
    todayWinners[0].innerText = dowWinners[6].innerText;
    todayWinners[1].innerText = dowWinners[7].innerText;
    break;
  case "Fri":
    todayWinners[0].innerText = dowWinners[8].innerText;
    todayWinners[1].innerText = dowWinners[9].innerText;
    break;
}
