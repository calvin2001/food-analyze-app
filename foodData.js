const foodDatabase = {
  // 곡류·콩·견과
  "기장": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "잡곡밥에 쓰는 곡류"
  },
  "메밀": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "메밀국수, 막국수에 쓰는 곡류"
  },
  "메조쌀": {
    suitableFor: ["태양인", "태음인"],
    notSuitable: [],
    description: "조가 섞인 쌀, 잡곡밥용"
  },
  "보리": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "보리밥·보리차용 곡류"
  },
  "옥수수": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "통옥수수·옥수수차 등에 쓰는 곡류"
  },
  "찹쌀": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "떡·죽에 쓰는 찰기 많은 쌀"
  },
  "감자": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "전분이 많은 뿌리채소"
  },
  "통밀가루": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "통밀빵·면류용 가루"
  },
  "밀": {
    suitableFor: ["소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "일반 밀가루의 원료 곡식"
  },
  "수수": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "수수밥·수수떡에 쓰는 곡류"
  },
  "율무": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "율무차·잡곡밥에 쓰는 곡류"
  },
  "현미": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "껍질을 덜 벗긴 쌀"
  },
  "고구마": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "구이·찜 등으로 먹는 뿌리채소"
  },
  "토란": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "알뿌리 형태의 뿌리채소"
  },
  "녹두": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "녹두전·죽에 쓰는 콩"
  },
  "팥": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "팥밥·단팥죽에 쓰는 콩"
  },
  "콩": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "두부·콩나물 등 가공식품 원료"
  },
  "들깨": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "들기름·깻국에 쓰는 씨앗"
  },
  "참깨": {
    suitableFor: ["소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "참기름·고명에 쓰는 씨앗"
  },
  "호두": {
    suitableFor: ["소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "지방과 단백질이 많은 견과류"
  },
  "해바라기 씨": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "간식·고명용 씨앗"
  },
  "땅콩": {
    suitableFor: ["태음인"],
    notSuitable: [],
    description: "볶음·땅콩버터 등에 쓰는 견과류"
  },

  // 우유·지방
  "우유": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "소에서 얻는 액체 유제품"
  },
  "두유": {
    suitableFor: ["소양인", "태양인", "태음인"],
    notSuitable: [],
    description: "콩으로 만든 식물성 음료"
  },
  "요구르트": {
    suitableFor: ["태양인", "태음인"],
    notSuitable: [],
    description: "유산균으로 발효한 우유 제품"
  },
  "산양유": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "염소·산양에서 얻는 우유"
  },
  "버터": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "유지방을 응고시킨 유제품"
  },
  "마가린": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "식물성 유지로 만든 버터 대용품"
  },

  // 어류·육류·해산물
  "쇠고기": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "소에서 얻는 붉은 살코기"
  },
  "돼지고기": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: ["태양인", "태음인"],
    description: "돼지에서 얻는 육류"
  },
  "양고기": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "양에서 얻는 육류"
  },
  "닭고기": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: ["태음인"],
    description: "계육, 닭"
  },
  "개고기": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: ["태양인", "태음인"],
    description: "개에서 얻는 육류"
  },
  "고등어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "등푸른 생선 고등어"
  },
  "갈치": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "흰살 생선 갈치"
  },
  "정어리": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "작은 등푸른 생선 정어리"
  },
  "삼치": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "지방이 많은 생선 삼치"
  },
  "명태": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "생선 명태, 북어로도 사용"
  },
  "멸치": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "국물·볶음에 쓰는 작은 생선"
  },
  "조기": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "생선 조기"
  },
  "청어": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "등푸른 생선 청어"
  },
  "연어": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "지방이 풍부한 연어"
  },
  "연어알": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "연어 알"
  },
  "오징어": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: ["태양인"],
    description: "마른오징어·볶음용 두족류"
  },
  "꼴뚜기": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "작은 오징어류 해산물"
  },
  "낙지": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "연체동물 낙지"
  },
  "문어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "연체동물 문어"
  },
  "복어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "맑은탕으로 먹는 생선 복어"
  },
  "새우": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "각종 새우류 해산물"
  },
  "소라": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "고둥류 해산물 소라"
  },
  "장어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "민물장어·붕장어 등"
  },
  "전복": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "고급 조개류 전복"
  },
  "홍어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "발효시켜 먹는 홍어"
  },
  "병어": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "흰살 생선 병어"
  },
  "홍합": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "조개류 홍합"
  },

  // 채소·해조류
  "가지": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "여름 채소 가지"
  },
  "배추": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "배추김치·국 등에 쓰는 잎채소"
  },
  "상추": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "쌈채소 상추"
  },
  "고사리": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "나물로 먹는 고사리"
  },
  "고추": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "매운맛을 내는 고추"
  },
  "달래": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "향이 강한 봄나물"
  },
  "당근": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: [],
    description: "베타카로틴이 많은 뿌리채소"
  },
  "도라지": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "사포닌이 있는 뿌리식물"
  },
  "무": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: [],
    description: "김치·국에 많이 쓰는 뿌리채소"
  },
  "부추": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "향이 강한 잎채소"
  },
  "시금치": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: [],
    description: "잎채소 시금치"
  },
  "쑥": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "쑥국·떡에 쓰는 봄나물"
  },
  "우엉": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "조림·볶음에 쓰는 뿌리채소"
  },
  "양파": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "알뿌리 채소 양파"
  },
  "열무": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "어린 무 잎, 열무김치용"
  },
  "연근": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "연의 뿌리"
  },
  "순채": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "수초류 순채"
  },
  "콩나물": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: [],
    description: "콩을 싹틔운 콩나물"
  },
  "근대": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "잎채소 근대"
  },
  "영부": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "태양인 표에 나오는 나물류"
  },
  "순채나물": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "순채로 만든 나물 요리"
  },
  "솔잎": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "솔잎차 등에 쓰는 소나무 잎"
  },

  "김": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "김밥·반찬용 해조류"
  },
  "미역": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "미역국·무침용 해조류"
  },
  "다시마": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "육수용 해조류 다시마"
  },
  "버섯(표고, 팽이, 느타리)": {
    suitableFor: ["소양인", "태양인", "태음인"],
    notSuitable: [],
    description: "표고·팽이·느타리 등 버섯류 묶음"
  },

  // 과일
  "감": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "가을 과일 감"
  },
  "배": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "수분 많은 배"
  },
  "사과": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "일반적인 사과"
  },
  "포도": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "당분이 많은 포도"
  },
  "머루": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "산머루, 야생 포도"
  },
  "다래": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "다래나무 열매"
  },
  "수박": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "여름 과일 수박"
  },
  "참외": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "여름 과일 참외"
  },
  "딸기": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "봄철 베리류 딸기"
  },
  "바나나": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: ["소음인"],
    description: "열대 과일 바나나"
  },
  "귤": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "겨울 감귤 류 귤"
  },
  "오렌지": {
    suitableFor: ["소양인", "소음인", "태양인"],
    notSuitable: [],
    description: "감귤류 오렌지"
  },
  "키위": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "비타민C가 풍부한 키위"
  },
  "레몬": {
    suitableFor: ["소음인", "태양인"],
    notSuitable: [],
    description: "신맛 강한 감귤류"
  },
  "파인애플": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "열대 과일 파인애플"
  },
  "자두": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "여름 과일 자두"
  },
  "멜론": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "달콤한 멜론"
  },
  "대추": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "말려서 차·약선에 쓰는 대추"
  },
  "유자": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "유자차 등에 쓰는 감귤류"
  },
  "석류": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "붉은 씨앗 과일 석류"
  },
  "살구": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "여름 과일 살구"
  },
  "모과": {
    suitableFor: ["태양인"],
    notSuitable: [],
    description: "모과청·모과차로 사용하는 과일"
  },

  // 조미료
  "된장": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "콩을 발효시킨 조미료"
  },
  "청국장": {
    suitableFor: ["소양인", "태양인", "태음인"],
    notSuitable: [],
    description: "강하게 발효된 콩 발효식품"
  },
  "겨자": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "매운맛을 내는 겨자 조미료"
  },
  "소금": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "염분 조절용 기본 조미료"
  },
  "식초": {
    suitableFor: ["소양인", "소음인"],
    notSuitable: [],
    description: "신맛을 내는 액체 조미료"
  },
  "설탕": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "단맛을 내는 감미료"
  },
  "후추": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "매운 향신료 후추"
  },
  "카레": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "카레가루, 여러 향신료 혼합"
  },

  // 차·주류
  "녹차": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "찻잎을 우린 차"
  },
  "보리차": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "볶은 보리를 우린 차"
  },
  "옥수수차": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "옥수수수염·옥수수 차"
  },
  "결명자차": {
    suitableFor: ["소양인", "소음인", "태양인", "태음인"],
    notSuitable: [],
    description: "결명자를 볶아 끓인 차"
  },
  "감잎차": {
    suitableFor: ["소양인", "태양인"],
    notSuitable: [],
    description: "감나무 잎으로 만든 차"
  },
  "우엉차": {
    suitableFor: ["소양인"],
    notSuitable: [],
    description: "우엉을 우린 차"
  },
  "꿀차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "꿀을 탄 따뜻한 차"
  },
  "인삼차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "인삼을 달여 만든 차"
  },
  "대추차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "대추를 달여 만든 차"
  },
  "생강차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "생강을 넣어 끓인 차"
  },
  "계피차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "계피를 넣어 끓인 차"
  },
  "귤피차": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "귤껍질을 넣어 끓인 차"
  },

  "맥주": {
    suitableFor: [],
    notSuitable: ["소양인", "소음인"],
    description: "보리 발효 알코올 음료"
  },
  "청주": {
    suitableFor: ["태양인", "태음인"],
    notSuitable: [],
    description: "맑게 걸러낸 한국식 청주"
  },
  "소주": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "증류식 또는 희석식 소주"
  },
  "탁주": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "막걸리 등 탁한 곡주"
  },
  "약주": {
    suitableFor: ["소음인"],
    notSuitable: [],
    description: "약재를 넣어 빚은 청주류"
  }
};

module.exports = foodDatabase;