export const days = [
  ["월", "화", "수", "목", "금", "토", "일"],
  ["매일", "평일", "주말"],
];

export const time = {
  ampm: ["오전", "오후"],
  hour: Array.from({ length: 12 }, (_, i) => `${i + 1}시`), // 1시 ~ 12시
  minute: ["00분", "10분", "20분", "30분", "40분", "50분"],
};

export const noticeTime = [
  ["정시", "10분 전", "30분 전", "1시간 전"],
  ["2시간 전", "하루 전", "2일 전", "일주일 전"],
];

export const repeatNotice = [["매주", "이번 주만"]];

export const setTimes = {
  days: days,
  time: time,
  noticeTime: noticeTime,
  repeatNotice: repeatNotice,
};

export const setTimesTitle = {
  days: "외출 요일",
  time: "외출 시간",
  noticeTime: "알림 희망 시간",
  repeatNotice: "알림 반복",
};
