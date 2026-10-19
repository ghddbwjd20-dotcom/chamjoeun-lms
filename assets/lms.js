(function (global) {
  const KEY = "chamjoeun-lms-v3";
  const PUBLIC = "https://ghddbwjd20-dotcom.github.io/chamjoeun-multiculture/v4/";
  const DEMO = { name: "이민호", email: "demo@chamjoeun.kr", password: "demo1234", phone: "010-1234-5678" };
  const COURSES = [
    {
      id: "korean",
      cat: "교육",
      type: "free",
      name: "생활 한국어",
      desc: "시장, 병원, 관공서에서 바로 쓰는 생활 한국어입니다.",
      period: "2026.03.03 – 03.28",
      weeks: "4주 · 주 2회",
      hours: "총 8차시 · 6시간",
      price: 0,
      teacher: "김민서",
      place: "온라인",
      img: "assets/icon-education.jpg",
      notice: "3월 12일 3차시는 자료실 워크시트를 미리 받아 두세요.",
      files: ["01 인사 표현.pdf", "02 장소별 단어장.pdf", "수강 안내문.pdf"],
      lessons: [
        { name: "발음과 인사", time: "18:00", min: 42 },
        { name: "시장·병원 회화", time: "32:00", min: 38 },
        { name: "서류 읽기", time: "00:00", min: 45 },
        { name: "복습과 정리", time: "00:00", min: 30 }
      ]
    },
    {
      id: "license",
      cat: "자격",
      type: "paid",
      name: "병원동행 관리사",
      desc: "병원 이동, 접수, 보호자 안내 실무를 배웁니다.",
      period: "2026.03.10 – 04.18",
      weeks: "6주 · 주 1회",
      hours: "총 6차시 · 9시간",
      price: 120000,
      teacher: "박지훈",
      place: "온라인 + 1회 실습",
      img: "assets/icon-programs.jpg",
      notice: "실습일은 4월 11일 토요일, 동래 센터에서 진행합니다.",
      files: ["과정 소개서.pdf", "실습 동의서.pdf"],
      lessons: [
        { name: "과정 소개와 역할", time: "12:00", min: 50 },
        { name: "병원 이동 이론", time: "00:00", min: 55 },
        { name: "접수·수납 실습 안내", time: "00:00", min: 48 },
        { name: "평가와 수료", time: "00:00", min: 40 }
      ]
    },
    {
      id: "lifelong",
      cat: "평생",
      type: "free",
      name: "성인문해 · 기초생활",
      desc: "한글과 생활 문서를 천천히 익히는 과정입니다.",
      period: "2026.04.01 – 05.27",
      weeks: "8주 · 주 1회",
      hours: "총 8차시 · 8시간",
      price: 0,
      teacher: "이서연",
      place: "온라인",
      img: "assets/icon-about.jpg",
      notice: "4월 개강 전 레벨 확인 안내를 문자로 보냅니다.",
      files: ["학습 안내.pdf"],
      lessons: [
        { name: "학습 안내", time: "00:00", min: 25 },
        { name: "기초 문해", time: "00:00", min: 40 },
        { name: "생활 활용", time: "00:00", min: 40 },
        { name: "마무리", time: "00:00", min: 30 }
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
    if (!s.users.some((u) => u.email === DEMO.email)) {
      s.users.push(DEMO);
      s.enrolls[DEMO.email] = ["korean", "license"];
      s.attend[DEMO.email + ":korean"] = ["발음과 인사", "시장·병원 회화"];
      s.attend[DEMO.email + ":license"] = ["과정 소개와 역할"];
      s.resume[DEMO.email + ":korean"] = "서류 읽기";
      s.resume[DEMO.email + ":license"] = "병원 이동 이론";
      s.pays[DEMO.email] = [{ id: "license", at: "2026-03-09T10:12:00", amount: 120000, status: "완료" }];
    }
    return s;
  };
  const state = () => seed(load());
  const money = (n) => n ? n.toLocaleString("ko-KR") + "원" : "무료";

  const api = {
    PUBLIC,
    DEMO,
    courses: COURSES,
    money,
    course(id) { return COURSES.find((c) => c.id === id) || null; },
    user() {
      const s = state();
      return s.users.find((u) => u.email === s.session) || null;
    },
    loginDemo() {
      const s = state();
      s.session = DEMO.email;
      save(s);
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
      const s = state();
      const user = s.users.find((u) => u.email === (email || "").trim().toLowerCase() && u.password === password);
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
      const slot = document.querySelector("[data-user]");
      if (slot) {
        slot.innerHTML = user
          ? '<a class="who" href="account.html">' + user.name + " 님</a><button type=\"button\" id=\"lmsOut\">로그아웃</button>"
          : '<a href="login.html">로그인</a> · <a href="register.html">회원가입</a>';
        const out = document.getElementById("lmsOut");
        if (out) out.onclick = () => { api.logout(); location.href = "index.html"; };
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
