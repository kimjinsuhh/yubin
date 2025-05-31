// 요정 유형 및 결과 데이터
const fairyTypes = {
  nature: {
    title: '🌿 자연요정',
    subtitle: '“너의 고요함은 세상을 감싸는 숲 같아.”',
    summary: '평화롭고 조화를 중시하는 당신은 모두에게 안식처가 되어주는 존재예요. 갈등을 피하고 자연스럽게 조화를 이룹니다.',
    features: '따뜻한 배려, 부드러운 리더십, 자연과의 친화력',
    quote: '“모든 것은 제자리를 찾아가요.”',
    color: '짙은 녹색, 올리브 그린',
    image: 'fairy_nature.png'
  },
  fire: {
    title: '🔥 불꽃요정',
    subtitle: '“당신은 마법의 불꽃처럼 세상을 밝히는 에너지!”',
    summary: '열정과 추진력의 화신! 당신은 목표를 정하면 누구보다 빠르게 달려가는 요정이에요.',
    features: '강한 책임감, 리더십, 결정력',
    quote: '“안 되면 되게 만들어야지!”',
    color: '선명한 빨강, 주황',
    image: 'fairy_fire.png'
  },
  water: {
    title: '💧 물방울요정',
    subtitle: '“감정의 결을 읽는 당신, 마음의 치유자.”',
    summary: '깊고 따뜻한 감성을 지닌 당신은 마음을 어루만지는 능력이 탁월한 요정이에요.',
    features: '공감력, 섬세함, 친절함',
    quote: '“마음은 말보다 먼저 알아요.”',
    color: '파란빛, 맑은 물색',
    image: 'fairy_water.png'
  },
  wind: {
    title: '🌪 바람요정',
    subtitle: '“구속은 싫어요! 나는 오늘도 자유롭게 날아요.”',
    summary: '자유롭고 창의적인 영혼! 당신은 상상력이 풍부하고 틀에 갇히는 것을 싫어해요.',
    features: '독창성, 유연함, 모험심',
    quote: '“가장 재미있는 길을 따라가 볼까?”',
    color: '하늘색, 은빛',
    image: 'fairy_wind.png'
  },
  moon: {
    title: '🌙 그림자요정',
    subtitle: '“당신의 고요함 속엔 별처럼 빛나는 생각이 있어요.”',
    summary: '내면의 깊이를 지닌 사색가. 조용하지만 강한 존재감을 가진 당신은 세상을 천천히, 진지하게 바라봐요.',
    features: '집중력, 통찰력, 차분함',
    quote: '“말하지 않아도 느껴지는 것들.”',
    color: '진한 남색, 보랏빛',
    image: 'fairy_moon.png'
  },
  sparkle: {
    title: '🪄 반짝임요정',
    subtitle: '“세상에 빛을 뿌리는 작은 웃음의 마법사!”',
    summary: '유쾌하고 사교적인 당신은 어디서든 분위기를 반짝이게 만드는 요정이에요.',
    features: '재치, 커뮤니케이션 능력, 낙천적',
    quote: '“재미없으면 내가 만든다!”',
    color: '금색, 핑크, 반짝이',
    image: 'fairy_sparkle.png'
  }
};

// 질문 데이터
const questions = [
  {
    q: '마법의 숲에서 하루를 보낼 수 있다면, 나는?',
    img: 'q1.png',
    options: [
      { text: '햇살 가득한 초원에서 꽃과 이야기해요', type: 'nature' },
      { text: '불꽃이 춤추는 분화구에서 마법 실험을 해요', type: 'fire' },
      { text: '고요한 호숫가에서 물고기와 감정을 나눠요', type: 'water' },
      { text: '바람을 타고 숲 너머 모험을 떠나요', type: 'wind' }
    ]
  },
  {
    q: '요정 대회의 대표가 되어야 한다면, 나는 어떤 방식으로 준비할까?',
    img: 'q2.png',
    options: [
      { text: '전략을 세우고 실전 훈련에 돌입해요', type: 'fire' },
      { text: '다른 요정들과 함께 팀워크를 다져요', type: 'nature' },
      { text: '대회를 상상하며 스토리를 구상해요', type: 'wind' },
      { text: '무대 뒤에서 조용히 힘을 모아요', type: 'moon' }
    ]
  },
  {
    q: '인간 세상에 몰래 다녀온 요정 친구가 고민 중이라면, 나는?',
    img: 'q3.png',
    options: [
      { text: '그 친구의 감정을 먼저 이해하려 해요', type: 'water' },
      { text: '위로와 함께 재미난 이야기를 들려줘요', type: 'sparkle' },
      { text: '조용히 옆에 있어주고 말없이 손을 잡아요', type: 'moon' },
      { text: '직접 인간 세상으로 가서 함께 해결해요', type: 'fire' }
    ]
  },
  {
    q: '요정왕국에서 열리는 축제! 나는 어디에 있을까?',
    img: 'q4.png',
    options: [
      { text: '반짝이는 조명을 설치하며 모두를 웃게 해요', type: 'sparkle' },
      { text: '구석 테이블에서 조용히 밤하늘을 바라봐요', type: 'moon' },
      { text: '무지개 다리 위에서 춤추며 노래를 해요', type: 'wind' },
      { text: '숲속 생명체들과 손을 잡고 노래를 나눠요', type: 'nature' }
    ]
  },
  {
    q: '마법이 갑자기 통하지 않는다면?',
    img: 'q5.png',
    options: [
      { text: '차분히 자연의 흐름을 기다려요', type: 'nature' },
      { text: '원인을 분석하고 빠르게 대응해요', type: 'fire' },
      { text: '혼자 조용히 마음을 가다듬어요', type: 'moon' },
      { text: '웃으며 "어떻게 되겠지!" 하고 넘겨요', type: 'sparkle' }
    ]
  },
  {
    q: '밤하늘 별이 말을 건다면, 나는?',
    img: 'q6.png',
    options: [
      { text: '감정을 나누며 조용히 대화를 나눠요', type: 'water' },
      { text: '재밌는 얘기 없니? 하며 장난스럽게 물어요', type: 'sparkle' },
      { text: '별을 관찰하며 어떤 의미인지 분석해요', type: 'moon' },
      { text: '별과 함께 타고 숲 너머 모험을 떠나요', type: 'wind' }
    ]
  },
  {
    q: '요정학교에서 제일 좋아하는 수업은?',
    img: 'q7.png',
    options: [
      { text: '식물 언어 해석학', type: 'nature' },
      { text: '불의 마법 실습', type: 'fire' },
      { text: '감정 공명과 치유학', type: 'water' },
      { text: '꿈 속 항해술', type: 'moon' }
    ]
  },
  {
    q: '인간이 요정을 본다면, 나는?',
    img: 'q8.png',
    options: [
      { text: '꽃잎 속에 숨고 그가 떠날 때까지 기다려요', type: 'nature' },
      { text: '재치 있게 농담하고 금방 사라져요', type: 'sparkle' },
      { text: '인간에게 조용히 다가가 마음을 읽어요', type: 'water' },
      { text: '바람처럼 휙 날아 도망가요', type: 'wind' }
    ]
  },
  {
    q: '요정으로서의 사명이 주어진다면, 나는 어떤 역할을 맡고 싶나요?',
    img: 'q9.png',
    options: [
      { text: '생명을 지키는 수호자', type: 'nature' },
      { text: '빛을 밝히며 에너지를 퍼뜨리는 전도사', type: 'sparkle' },
      { text: '상처 입은 마음을 감싸는 치유자', type: 'water' },
      { text: '이야기를 전하고 웃음을 퍼뜨리는 이야기꾼', type: 'wind' }
    ]
  }
];

let current = 0;
let scores = { nature: 0, fire: 0, water: 0, wind: 0, moon: 0, sparkle: 0 };

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const imageArea = document.getElementById('image-area');
const progress = document.getElementById('progress');
const resultEl = document.getElementById('result');
const restartBtn = document.getElementById('restart');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const questionNumberEl = document.getElementById('question-number');
const prevBtn = document.getElementById('prev-btn');

function renderProgress() {
  progress.innerHTML = `<div id="progress-bar" style="width:${((current)/questions.length)*100}%"></div>`;
}

function renderQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }
  // ← 버튼 첫 문제에서 비활성화
  prevBtn.disabled = current === 0;
  prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
  // 문제 번호 표시 (1부터 시작)
  questionNumberEl.textContent = `${current + 1} / ${questions.length}`;
  renderProgress();
  const q = questions[current];
  questionEl.textContent = q.q;
  imageArea.innerHTML = `<img src="images/${q.img}" alt="질문 이미지">`;
  optionsEl.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsEl.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type]++;
  current++;
  renderQuestion();
}

function showResult() {
  quiz.classList.add('hidden');
  resultEl.classList.remove('hidden');
  restartBtn.classList.remove('hidden');
  questionNumberEl.textContent = '';
  // 최고 점수 유형 찾기
  const max = Math.max(...Object.values(scores));
  const topTypes = Object.keys(scores).filter(t => scores[t] === max);
  // 동점일 경우 랜덤
  const fairy = fairyTypes[topTypes[Math.floor(Math.random()*topTypes.length)]];
  resultEl.innerHTML = `
    <div class="fairy-title">${fairy.title}</div>
    <div style="font-size:1.1rem;color:#7c4dff;margin-bottom:8px;">${fairy.subtitle}</div>
    <img src="images/${fairy.image}" alt="${fairy.title}" style="width:180px;height:180px;border-radius:16px;margin-bottom:12px;box-shadow:0 2px 12px rgba(0,0,0,0.10);">
    <div style="margin-bottom:8px;"><b>성격 요약:</b> ${fairy.summary}</div>
    <div style="margin-bottom:8px;"><b>특징:</b> ${fairy.features}</div>
    <div style="margin-bottom:8px;"><b>어울리는 말:</b> ${fairy.quote}</div>
    <div style="margin-bottom:8px;"><b>상징 색상:</b> ${fairy.color}</div>
  `;
}

restartBtn.onclick = () => {
  current = 0;
  scores = { nature: 0, fire: 0, water: 0, wind: 0, moon: 0, sparkle: 0 };
  quiz.classList.remove('hidden');
  resultEl.classList.add('hidden');
  restartBtn.classList.add('hidden');
  renderQuestion();
};

// 시작화면에서 '시작하기' 클릭 시 퀴즈 시작
startBtn.onclick = () => {
  startScreen.classList.add('hidden');
  quiz.classList.remove('hidden');
  renderQuestion();
};

prevBtn.onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
};

// renderQuestion(); // 이 부분은 삭제 또는 주석처리 