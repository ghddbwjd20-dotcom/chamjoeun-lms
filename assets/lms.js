(function (global) {
  const KEY = "chamjoeun-lms-v3";
  const PUBLIC = "https://ghddbwjd20-dotcom.github.io/chamjoeun-multiculture/v4/";
  const DEMO = { name: "이민호", email: "demo@chamjoeun.kr", password: "demo1234", phone: "010-1234-5678", sid: "CJ-2026-1084", term: "2026년 1기", joined: "2026.03.02", lastLogin: "2026.03.12 21:14", org: "참조은다문화 학습자", campus: "온라인 캠퍼스" };
  const ATTEND_LOG = {
    "korean:발음과 인사": { watch: 42, pct: 100, at: "2026.03.03 19:48" },
    "korean:시장·병원 회화": { watch: 36, pct: 95, at: "2026.03.06 19:42" },
    "license:과정 소개와 역할": { watch: 48, pct: 96, at: "2026.03.14 11:02" }
  };
  const COURSES = [
    {
      id: "korean",
      cat: "생활 한국어",
      type: "free",
      name: "생활 한국어",
      subtitle: "시장 · 병원 · 관공서에서 바로 쓰는 말하기",
      desc: "한국 생활에서 매일 만나는 상황을 짧은 문장으로 연습합니다. 인사, 장보기, 병원 접수, 안내문 읽기까지 4주 동안 따라 합니다.",
      audience: "한국 생활이 처음이거나, 간단한 대화가 어려운 성인 학습자",
      goals: ["자기소개와 기본 인사를 또렷하게 말합니다.", "시장과 병원에서 필요한 문장을 따라 합니다.", "안내문·신청서의 핵심 단어를 읽습니다."],
      period: "2026.03.03 – 03.28",
      weeks: "4주 · 주 2회 · 화·금 19:00",
      hours: "4차시 · 155분",
      price: 0,
      teacher: "김민서",
      teacherBio: "한국어 교육 10년. 생활 회화와 발음을 중심으로 가르칩니다.",
      place: "온라인 강의실",
      img: "assets/icon-education.jpg",
      code: "KOR-101",
      creditType: "비학점 · 필수",
      credit: "이수 4차시",
      room: "사이버강의실 A-12",
      term: "2026년 1기",
      section: "A반",
      enrollAt: "2026.03.02",
      lastAt: "2026.03.12 21:14",
      studyMin: 80,
      remain: "16일",
      notice: "3월 13일 3차시 전에 자료실의 ‘장소별 단어장’을 받아 두세요.",
      nextClass: "3월 13일(금) 19:00 · 3차시 서류 읽기",
      posts: [
        { tag: "공지", title: "3차시 학습자료(장소별 단어장)를 올렸습니다", date: "03.12" },
        { tag: "안내", title: "출석은 영상 실재생 90% 이상일 때만 인정됩니다", date: "03.03" }
      ],
      todos: [
        { type: "학습", title: "3차시 서류 읽기", due: "03.13 19:00", state: "대기" },
        { type: "자료", title: "장소별 단어장 미리 받기", due: "03.13", state: "필요" }
      ],
      qna: [
        { q: "출석은 어떻게 인정되나요?", a: "영상을 실제 들은 구간이 90% 이상이면 출석입니다. 건너뛴 부분은 제외합니다.", date: "03.08", who: "김민서 강사" },
        { q: "자료를 인쇄해도 되나요?", a: "가능합니다. 워크시트는 3차시 전에 받아 두세요.", date: "03.10", who: "김민서 강사" }
      ],
      files: [
        { name: "01 인사 표현.pdf", kind: "학습자료", size: "1.2MB" },
        { name: "02 장소별 단어장.pdf", kind: "워크시트", size: "860KB" },
        { name: "수강 안내문.pdf", kind: "안내", size: "240KB" }
      ],
      lessons: [
        { name: "발음과 인사", date: "3월 3일(화) 19:00", min: 42, goal: "자기소개와 기본 인사를 정확히 발음합니다.", outline: ["모음·자음 바로잡기", "안녕하세요 / 감사합니다", "이름·국적 말하기", "짧은 대화 따라 하기"] },
        { name: "시장·병원 회화", date: "3월 6일(금) 19:00", min: 38, goal: "물건 값과 증상을 간단한 문장으로 말합니다.", outline: ["이거 얼마예요?", "조금만 깎아 주세요", "머리가 아파요", "접수처가 어디예요?"] },
        { name: "서류 읽기", date: "3월 13일(금) 19:00", min: 45, goal: "안내문과 신청서에 쓰인 단어를 찾습니다.", outline: ["안내문의 날짜·장소", "신청서 이름·주소 칸", "병원 접수증 읽기", "모르는 단어 표시하기"] },
        { name: "복습과 정리", date: "3월 20일(금) 19:00", min: 30, goal: "4주 문장을 다시 말하고 스스로 점검합니다.", outline: ["인사·장보기 복습", "병원 회화 복습", "짧은 자기점검", "다음 과정 안내"] }
      ]
    },
    {
      id: "license",
      cat: "민간자격",
      type: "paid",
      name: "병원동행 관리사",
      subtitle: "이동 · 접수 · 보호자 안내 실무",
      desc: "병원을 혼자 가기 어려운 분을 옆에서 돕는 실무를 배웁니다. 이동, 접수, 수납, 대기 안내를 영상으로 익히고, 마지막에 동래 센터에서 하루 실습합니다.",
      audience: "돌봄·안내 일에 관심 있는 성인. 병원 용어를 몰라도 시작할 수 있습니다.",
      goals: ["병원 동행 관리사의 역할과 경계를 구분합니다.", "이동·접수·수납 순서를 설명합니다.", "실습 전 안전·동의 절차를 이해합니다."],
      period: "2026.03.10 – 04.18",
      weeks: "6주 · 주 1회 · 토 10:00",
      hours: "4차시 · 193분 + 실습 1회",
      price: 120000,
      teacher: "박지훈",
      teacherBio: "병원 코디네이터 경력. 현장 동선과 보호자 응대를 가르칩니다.",
      place: "온라인 + 4월 11일 동래 센터 실습",
      img: "assets/icon-programs.jpg",
      code: "LIC-201",
      creditType: "비학점 · 자격과정",
      credit: "이수 4차시 + 실습 1회",
      room: "사이버강의실 B-03",
      term: "2026년 1기",
      section: "주간반",
      enrollAt: "2026.03.09",
      lastAt: "2026.03.14 11:40",
      studyMin: 50,
      remain: "37일",
      notice: "실습은 4월 11일(토) 10:00, 동래 참조은빌딩 5층입니다. 실습 동의서를 미리 제출해 주세요.",
      nextClass: "3월 21일(토) 10:00 · 2차시 병원 이동 이론",
      posts: [
        { tag: "공지", title: "실습 동의서 제출 기한은 4월 4일입니다", date: "03.14" },
        { tag: "안내", title: "1차시 출석이 확인되었습니다", date: "03.14" }
      ],
      todos: [
        { type: "학습", title: "2차시 병원 이동 이론", due: "03.21 10:00", state: "대기" },
        { type: "제출", title: "실습 동의서", due: "04.04", state: "미제출" }
      ],
      qna: [
        { q: "실습 때 복장은 어떻게 하나요?", a: "단정한 평상복과 운동화면 됩니다. 가운은 센터에서 준비합니다.", date: "03.15", who: "박지훈 강사" }
      ],
      files: [
        { name: "과정 소개서.pdf", kind: "안내", size: "1.1MB" },
        { name: "실습 동의서.pdf", kind: "제출", size: "320KB" },
        { name: "병원 동선 메모.pdf", kind: "학습자료", size: "540KB" }
      ],
      lessons: [
        { name: "과정 소개와 역할", date: "3월 14일(토) 10:00", min: 50, goal: "할 수 있는 일과 하면 안 되는 일을 구분합니다.", outline: ["과정 일정과 평가", "동행·안내의 범위", "개인정보와 동의", "응급 시 연락 순서"] },
        { name: "병원 이동 이론", date: "3월 21일(토) 10:00", min: 55, goal: "집–병원–귀가 동선을 단계별로 설명합니다.", outline: ["출발 전 확인 목록", "교통·휠체어 이동", "대기실에서 할 일", "귀가 후 인수인계"] },
        { name: "접수·수납 실습 안내", date: "3월 28일(토) 10:00", min: 48, goal: "접수창구와 수납 창구에서 대신 말할 문장을 익힙니다.", outline: ["예약 확인", "접수 번호표", "처방전·수납", "실습 당일 복장"] },
        { name: "평가와 수료", date: "4월 4일(토) 10:00", min: 40, goal: "짧은 점검 후 실습 전 준비물을 확정합니다.", outline: ["핵심 점검 10문항", "실습 조 편성", "수료 기준 안내", "자격 발급 일정"] }
      ]
    },
    {
      id: "lifelong",
      cat: "평생교육",
      type: "free",
      name: "성인문해 · 기초생활",
      subtitle: "한글과 생활 문서를 천천히",
      desc: "글을 천천히 익히고, 고지서·안내문처럼 생활에서 만나는 문서를 함께 읽습니다. 4월 개강이며, 지금 미리 과정만 살펴볼 수 있습니다.",
      audience: "한글이 서툴거나, 생활 문서를 혼자 읽기 어려운 성인",
      goals: ["자음·모음을 순서대로 익힙니다.", "이름·주소·날짜를 읽고 씁니다.", "고지서와 안내문의 중요한 숫자를 찾습니다."],
      period: "2026.04.01 – 05.27",
      weeks: "8주 · 주 1회 · 수 14:00",
      hours: "4차시 · 135분",
      price: 0,
      teacher: "이서연",
      teacherBio: "성인문해 현장 강의. 천천히, 반복해서 진행합니다.",
      place: "온라인 강의실",
      img: "assets/icon-about.jpg",
      code: "LIT-301",
      creditType: "비학점 · 선택",
      credit: "이수 4차시",
      room: "사이버강의실 C-08",
      term: "2026년 1기",
      section: "오후반",
      enrollAt: "",
      lastAt: "-",
      studyMin: 0,
      remain: "개강 전",
      notice: "3월 25일 레벨 확인 문자를 보냅니다. 답장하시면 반을 안내합니다.",
      nextClass: "4월 1일(수) 14:00 · 1차시 학습 안내",
      posts: [{ tag: "안내", title: "4월 1일 개강. 레벨 확인 문자를 기다려 주세요", date: "03.10" }],
      todos: [{ type: "안내", title: "레벨 확인 문자 답장", due: "03.25", state: "대기" }],
      qna: [],
      files: [
        { name: "학습 안내.pdf", kind: "안내", size: "380KB" },
        { name: "글자 연습장.pdf", kind: "워크시트", size: "720KB" }
      ],
      lessons: [
        { name: "학습 안내", date: "4월 1일(수) 14:00", min: 25, goal: "강의실 사용법과 공부 습관을 알아봅니다.", outline: ["화면 보는 방법", "출석이 쌓이는 기준", "자료 받는 위치", "질문하는 방법"] },
        { name: "기초 문해", date: "4월 8일(수) 14:00", min: 40, goal: "자음과 모음을 소리 내어 읽습니다.", outline: ["자음 14자", "모음 10자", "이름 쓰기", "짧은 단어 읽기"] },
        { name: "생활 활용", date: "4월 22일(수) 14:00", min: 40, goal: "고지서와 안내문에서 날짜와 금액을 찾습니다.", outline: ["고지서 숫자", "안내문 장소", "신청서 칸", "천천히 다시 읽기"] },
        { name: "마무리", date: "5월 20일(수) 14:00", min: 30, goal: "배운 글을 복습하고 다음 과정을 안내받습니다.", outline: ["복습 문장", "자기점검", "생활 한국어 연결", "수료 안내"] }
      ]
    }
  ];

  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  };
  const save = (data) => localStorage.setItem(KEY, JSON.stringify(data));
  const seed = (s) => {
    if (!s.users) s.users = [];
    if (!s.session) s.session = null;
    if (!s.enrolls) s.enrolls = {};
    if (!s.attend) s.attend = {};
    if (!s.pays) s.pays = {};
    if (!s.resume) s.resume = {};
    const i = s.users.findIndex((u) => u.email === DEMO.email);
    if (i < 0) s.users.push({ ...DEMO });
    else Object.assign(s.users[i], DEMO);
    s.enrolls[DEMO.email] = ["korean", "license"];
    if (!s.attend[DEMO.email + ":korean"]) s.attend[DEMO.email + ":korean"] = ["발음과 인사", "시장·병원 회화"];
    if (!s.attend[DEMO.email + ":license"]) s.attend[DEMO.email + ":license"] = ["과정 소개와 역할"];
    if (!s.resume[DEMO.email + ":korean"]) s.resume[DEMO.email + ":korean"] = "서류 읽기";
    if (!s.resume[DEMO.email + ":license"]) s.resume[DEMO.email + ":license"] = "병원 이동 이론";
    if (!s.pays[DEMO.email]) s.pays[DEMO.email] = [{ id: "license", at: "2026-03-09T10:12:00", amount: 120000, status: "완료" }];
    return s;
  };
  const state = () => seed(load());
  const money = (n) => n ? n.toLocaleString("ko-KR") + "원" : "무료";
  const fileName = (f) => typeof f === "string" ? f : f.name;
  const pad = (n) => String(n).padStart(2, "0");

  const api = {
    PUBLIC,
    DEMO,
    courses: COURSES,
    money,
    fileName,
    pad,
    ring(pct, label, sub, size, display) {
      const p = Math.max(0, Math.min(100, Number(pct) || 0));
      const s = size || 120;
      const r = 42;
      const c = 2 * Math.PI * r;
      const dash = (p / 100) * c;
      return '<div class="chart-ring">'+
        '<div class="chart-ring-wrap">'+
          '<svg viewBox="0 0 120 120" width="'+s+'" height="'+s+'" aria-hidden="true">'+
            '<circle class="track" cx="60" cy="60" r="'+r+'"></circle>'+
            '<circle class="fill" cx="60" cy="60" r="'+r+'" stroke-dasharray="'+dash+' '+c+'"></circle>'+
          '</svg>'+
          '<div class="chart-ring-num"><b>'+(display!=null?display:p+"%")+'</b>'+(label?'<span>'+label+'</span>':'')+'</div>'+
        '</div>'+
        (sub?'<p>'+sub+'</p>':'')+
      '</div>';
    },
    bars(rows) {
      return '<div class="chart-bars">'+rows.map(function(row){
        return '<div class="chart-bar">'+
          '<div class="chart-bar-top"><strong>'+row.name+'</strong><span>'+row.pct+'% · '+row.done+'/'+row.total+'차시</span></div>'+
          '<div class="chart-bar-track"><i style="width:'+row.pct+'%"></i><em style="left:90%" title="수료 기준 90%"></em></div>'+
        '</div>';
      }).join('')+'</div>';
    },
    steps(course) {
      const done = api.attended(course.id);
      return '<div class="chart-steps">'+
        '<strong>'+course.name+'</strong>'+
        '<ol>'+course.lessons.map(function(l,i){
          const on = done.indexOf(l.name) > -1;
          return '<li class="'+(on?'is-on':'')+'"><i></i><span>'+api.pad(i+1)+' '+l.name+'</span></li>';
        }).join('')+'</ol>'+
      '</div>';
    },
    course(id) { return COURSES.find((c) => c.id === id) || null; },
    lessonNo(course, lessonName) {
      const i = (course.lessons || []).findIndex((l) => l.name === lessonName);
      return i < 0 ? 1 : i + 1;
    },
    attendMeta(course, lesson) {
      return ATTEND_LOG[course.id + ":" + lesson.name] || { watch: lesson.min, pct: 100, at: "시안 출석" };
    },
    attendSheet(course) {
      const done = api.attended(course.id);
      return '<table class="table attend"><thead><tr><th>차시</th><th>학습 내용</th><th>수업일</th><th>권장</th><th>실재생</th><th>출석일시</th><th>결과</th></tr></thead><tbody>'+
        course.lessons.map(function(l,i){
          const on = done.indexOf(l.name) > -1;
          const m = on ? api.attendMeta(course, l) : null;
          return "<tr><td>"+api.pad(i+1)+"</td><td>"+l.name+"</td><td>"+(l.date||"-")+"</td><td>"+l.min+"분</td><td>"+(m?m.watch+"분 ("+m.pct+"%)":"-")+"</td><td>"+(m?m.at:"-")+"</td><td>"+(on?"<em class='ok'>출석</em>":"<em class='wait'>미수강</em>")+"</td></tr>";
        }).join("")+"</tbody></table>";
    },
    weekPlan() {
      const rows = [];
      api.enrolled().forEach(function(c){
        const next = api.nextLesson(c.id);
        c.lessons.forEach(function(l, i){
          const on = api.attended(c.id).indexOf(l.name) > -1;
          const isNext = next && next.name === l.name && !on;
          rows.push({
            date: l.date, code: c.code, name: c.name, no: i + 1, lesson: l.name,
            min: l.min, state: on ? "출석" : (isNext ? "다음" : "예정"),
            cls: on ? "ok" : (isNext ? "now" : "wait"), id: c.id
          });
        });
      });
      return rows;
    },
    submissions() {
      return [
        { course: "병원동행 관리사", code: "LIC-201", title: "실습 동의서", due: "2026.04.04", state: "미제출", cls: "now" },
        { course: "생활 한국어", code: "KOR-101", title: "3차시 워크시트 확인", due: "2026.03.13", state: "열람", cls: "ok" }
      ];
    },
    activity() {
      return [
        { at: "03.12 21:14", text: "생활 한국어 2차시 출석 인정 · 실재생 36분(95%)" },
        { at: "03.14 11:02", text: "병원동행 관리사 1차시 출석 인정 · 실재생 48분(96%)" },
        { at: "03.09 10:12", text: "병원동행 관리사 수강료 120,000원 결제 완료" },
        { at: "03.02 09:20", text: "2026년 1기 수강번호 CJ-2026-1084 부여" }
      ];
    },
    alerts() {
      return [
        { type: "수업", title: "생활 한국어 3차시가 내일 19:00입니다", date: "03.12", course: "KOR-101" },
        { type: "제출", title: "병원동행 실습 동의서를 4월 4일까지 제출해 주세요", date: "03.14", course: "LIC-201" },
        { type: "출석", title: "출석은 영상 실재생 90% 이상만 인정됩니다", date: "03.03", course: "안내" }
      ];
    },
    todoClass(state) {
      if (state === "미제출" || state === "필요") return "now";
      if (state === "열람" || state === "완료") return "ok";
      return "wait";
    },
    user() {
      const s = state();
      return s.users.find((u) => u.email === s.session) || null;
    },
    loginDemo() {
      const s = state();
      s.session = DEMO.email;
      save(s);
    },
    bootDemo() {
      const q = new URLSearchParams(location.search);
      if (q.get("demo") === "1" || !api.user()) api.loginDemo();
      return !!api.user();
    },
    register(form) {
      const s = state();
      const email = (form.email || "").trim().toLowerCase();
      if (!form.name || !email || !form.password) return "이름, 이메일, 비밀번호를 입력해 주세요.";
      if (s.users.some((u) => u.email === email)) return "이미 가입된 이메일입니다.";
      s.users.push({ name: form.name.trim(), email, password: form.password, phone: form.phone || "" });
      s.session = email;
      if (!s.enrolls[email]) s.enrolls[email] = [];
      save(s);
      return "";
    },
    login(email, password) {
      const e = (email || "").trim().toLowerCase();
      const p = (password || "").trim();
      if (e === DEMO.email && p === DEMO.password) {
        api.loginDemo();
        return "";
      }
      const s = state();
      const user = s.users.find((u) => u.email === e && u.password === p);
      if (!user) return "이메일 또는 비밀번호가 맞지 않습니다.";
      s.session = user.email;
      save(s);
      return "";
    },
    logout() {
      const s = state();
      s.session = null;
      save(s);
    },
    enroll(id) {
      const user = api.user();
      const course = api.course(id);
      if (!user || !course) return false;
      const s = state();
      const list = s.enrolls[user.email] || [];
      if (!list.includes(id)) list.push(id);
      s.enrolls[user.email] = list;
      save(s);
      return true;
    },
    enrolled() {
      const user = api.user();
      if (!user) return [];
      return (state().enrolls[user.email] || []).map((id) => api.course(id)).filter(Boolean);
    },
    isEnrolled(id) { return api.enrolled().some((c) => c.id === id); },
    markAttend(courseId, lesson) {
      const user = api.user();
      if (!user) return;
      const s = state();
      const key = user.email + ":" + courseId;
      const set = s.attend[key] || [];
      if (!set.includes(lesson)) set.push(lesson);
      s.attend[key] = set;
      s.resume[key] = lesson;
      save(s);
    },
    attended(courseId) {
      const user = api.user();
      if (!user) return [];
      return state().attend[user.email + ":" + courseId] || [];
    },
    resume(courseId) {
      const user = api.user();
      if (!user) return "";
      return state().resume[user.email + ":" + courseId] || "";
    },
    nextLesson(courseId) {
      const course = api.course(courseId);
      if (!course) return null;
      const done = api.attended(courseId);
      return course.lessons.find((l) => !done.includes(l.name)) || course.lessons[course.lessons.length - 1];
    },
    progress(courseId) {
      const course = api.course(courseId);
      if (!course) return 0;
      return Math.round((api.attended(courseId).length / course.lessons.length) * 100);
    },
    isDone(courseId) { return api.progress(courseId) >= 90; },
    pay(id) {
      const user = api.user();
      if (!user) return false;
      const s = state();
      s.pays[user.email] = s.pays[user.email] || [];
      s.pays[user.email].push({ id, at: new Date().toISOString(), amount: api.course(id).price, status: "완료" });
      save(s);
      return api.enroll(id);
    },
    payments() {
      const user = api.user();
      if (!user) return [];
      return state().pays[user.email] || [];
    },
    requireAuth(next) {
      if (new URLSearchParams(location.search).get("demo") === "1" || !api.user()) api.loginDemo();
      if (api.user()) return true;
      location.href = "login.html?next=" + encodeURIComponent(next || "classroom.html");
      return false;
    },
    next() {
      return new URLSearchParams(location.search).get("next") || "classroom.html";
    },
    paintChrome() {
      state();
      save(state());
      const user = api.user();
      const left = document.querySelector(".topbar .wrap > span");
      if (left && user) {
        left.textContent = (user.term || "2026년 1기") + " · " + (user.sid || "CJ-2026-0000");
      }
      const slot = document.querySelector("[data-user]");
      if (slot) {
        const notes = api.alerts();
        slot.innerHTML = user
          ? '<div class="bell-wrap"><button class="bell" type="button" id="lmsBell" aria-label="알림">알림 <i>'+notes.length+'</i></button><div class="bell-pop" hidden id="lmsBellPop"><h4>학습 알림</h4><ul>'+
            notes.map(function(a){return "<li><em>"+a.type+"</em><strong>"+a.title+"</strong><span>"+a.course+" · "+a.date+"</span></li>";}).join("")+
            '</ul><a href="account.html">마이페이지에서 보기</a></div></div><a class="who" href="account.html">' + user.name + " 님</a><button type=\"button\" id=\"lmsOut\">로그아웃</button>"
          : '<a href="login.html">로그인</a> · <a href="register.html">회원가입</a>';
        const out = document.getElementById("lmsOut");
        if (out) out.onclick = () => { api.logout(); location.href = "index.html"; };
        const bell = document.getElementById("lmsBell");
        const pop = document.getElementById("lmsBellPop");
        if (bell && pop) {
          bell.onclick = (e) => { e.stopPropagation(); pop.hidden = !pop.hidden; };
          document.addEventListener("click", () => { pop.hidden = true; });
          pop.onclick = (e) => e.stopPropagation();
        }
      }
      const cta = document.querySelector("[data-auth-cta]");
      if (cta) {
        if (user) {
          cta.textContent = "나의 강의실";
          cta.href = "classroom.html";
        } else {
          cta.textContent = "로그인";
          cta.href = "login.html";
        }
      }
      document.querySelectorAll("[data-public]").forEach((a) => {
        a.href = PUBLIC + (a.getAttribute("data-public") || "index.html");
      });
    }
  };

  global.LMS = api;
  document.addEventListener("DOMContentLoaded", () => {
    api.paintChrome();
    const btn = document.querySelector(".menu-btn");
    if (btn) btn.onclick = () => document.querySelector("header").classList.toggle("is-open");
  });
})(window);
