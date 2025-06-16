export const days = {
  day: ["일", "월", "화", "수", "목", "금", "토"],
  date: ["매일", "평일", "주말"],
};

export const times = {
  timeOfDay: ["오전", "오후"],
  hour: Array.from({ length: 12 }, (_, i) => i + 1),
  minute: Array.from({ length: 60 }, (_, i) => i),
};

export const noticeTime = [
  "정시",
  "10분 전",
  "30분 전",
  "1시간 전",
  "2시간 전",
  "하루 전",
  "2일 전",
  "일주일 전",
];

export const repeatNotice = ["매주", "이번 주만"];
