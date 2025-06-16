import {
  Bag,
  Camera,
  Dumbbell,
  Earphone,
  Laptop,
  Charger,
  PowerBank,
  Watch,
  Wallet,
  Card,
  Key,
  Mask,
  Glasses,
  Perfume,
  Pouch,
  EyeDrops,
  Medicine,
  ToothKit,
  Umbrella,
  Tumbler,
  Tissue,
} from "@/assets/images";

export type CategoryKey = "일상" | "운동" | "여행";

interface CategoryTypes {
  icon: React.FC<{ selected?: boolean }>;
  name: CategoryKey;
}

interface CatogoryItemTypes {
  icon: React.FC<{ selected?: boolean }>;
  name: string;
}

export const category: CategoryTypes[] = [
  { icon: Bag, name: "일상" },
  { icon: Dumbbell, name: "운동" },
  { icon: Camera, name: "여행" },
];

export const categoryItem: Record<CategoryKey, CatogoryItemTypes[]> = {
  일상: [
    { name: "이어폰", icon: Earphone },
    { name: "노트북", icon: Laptop },
    { name: "충전기", icon: Charger },
    { name: "보조배터리", icon: PowerBank },
    { name: "시계", icon: Watch },
    { name: "지갑", icon: Wallet },
    { name: "카드", icon: Card },
    { name: "열쇠", icon: Key },
    { name: "마스크", icon: Mask },
    { name: "안경", icon: Glasses },
    { name: "향수", icon: Perfume },
    { name: "파우치", icon: Pouch },
    { name: "인공눈물", icon: EyeDrops },
    { name: "약", icon: Medicine },
    { name: "양치도구", icon: ToothKit },
    { name: "우산", icon: Umbrella },
    { name: "텀블러", icon: Tumbler },
    { name: "휴지", icon: Tissue },
  ],
  운동: [
    // { name: "수건", icon: Towel },
    // { name: "운동화", icon: Shoes },
  ],
  여행: [
    // { name: "여권", icon: Passport }
  ],
};

export const essentialsList = {
  일상: [
    {
      title: "출근할 때 필수템",
      items: [
        "립밤",
        "USB",
        "사원증",
        "노트북",
        "충전기",
        "외장하드",
        "마스크",
        "도시락",
        "휴지",
        "이름표",
      ],
    },
    {
      title: "카페 갈 때 챙기는 것들",
      items: ["에어팟", "휴대폰", "노트", "펜", "텀블러"],
    },
    {
      title: "외출용 가방 속 필수품",
      items: ["지갑", "마스크", "손소독제", "휴대용 미니 손수건", "보조배터리"],
    },
    {
      title: "주말 집 근처 산책용",
      items: ["선크림", "선글라스", "물병", "간식", "가벼운 재킷"],
    },
    {
      title: "비오는 날 준비물",
      items: ["우산", "방수팩", "여분의 양말", "방수 신발 커버", "비옷"],
    },
    {
      title: "학교 갈 때 챙기는 것",
      items: ["필통", "노트", "교과서", "학생증", "도시락", "물병"],
    },
    {
      title: "시험 공부할 때 필수템",
      items: ["볼펜", "형광펜", "노트북", "포스트잇", "간식"],
    },
  ],
  운동: [
    {
      title: "헬스장 갈 때 필수템",
      items: ["운동화", "운동복", "물병", "수건", "락커키"],
    },
    {
      title: "조깅할 때 챙길 것들",
      items: ["러닝화", "스마트워치", "헤드폰", "휴대폰", "간단 간식"],
    },
    {
      title: "요가 수업 준비물",
      items: ["요가 매트", "편한 옷", "물병", "요가 스트랩", "타월"],
    },
    {
      title: "야외 자전거 라이딩",
      items: ["자전거 헬멧", "장갑", "물통", "선글라스", "스포츠 선크림"],
    },
    {
      title: "수영장 갈 때 챙기는 것",
      items: ["수영복", "수영모", "수경", "샴푸", "샤워 타월"],
    },
  ],
  여행: [
    {
      title: "국내 1박 2일 여행 필수템",
      items: [
        "여권/신분증",
        "충전기",
        "편한 신발",
        "세면도구",
        "간단한 옷가지",
      ],
    },
    {
      title: "해외여행 준비물",
      items: [
        "여권",
        "비행기 티켓",
        "환전한 현금",
        "여행자 보험증",
        "멀티 어댑터",
      ],
    },
    {
      title: "배낭여행 가방 속 필수품",
      items: [
        "방수팩",
        "휴대용 충전기",
        "간편 조리도구",
        "여행용 세제",
        "멀티툴",
      ],
    },
    {
      title: "여름 바캉스 준비물",
      items: ["수영복", "선크림", "선글라스", "모자", "비치타월"],
    },
    {
      title: "겨울 여행 챙길 것",
      items: ["두꺼운 외투", "장갑", "목도리", "보습 크림", "핫팩"],
    },
    {
      title: "도시 관광용 소지품",
      items: ["카메라", "지도 앱", "충전기", "간편 간식", "편한 신발"],
    },
    {
      title: "캠핑 여행 필수품",
      items: ["텐트", "침낭", "랜턴", "버너", "쿨러 박스"],
    },
  ],
};
