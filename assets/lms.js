(function (global) {
  const KEY = "chamjoeun-lms-v2";
  const PUBLIC = "https://ghddbwjd20-dotcom.github.io/chamjoeun-multiculture/v4/";
  const COURSES = [
    {
      id: "korean",
      cat: "교육",
      type: "free",
      name: "한국어 교육",
      desc: "생활 한국어와 의사소통을 중심으로 배웁니다.",
      period: "4주",
      price: 0,
      teacher: "김민서",
      img: "assets/icon-education.jpg",
      lessons: ["발음과 인사", "시장·병원 회화", "서류 읽기", "복습과 정리"]
    },
    {
      id: "license",
      cat: "자격",
      type: "paid",
      name: "민간자격과정",
      desc: "병원동행, 기초학력, 방과후 등 현장 직무 과정을 수강합니다.",
      period: "6주",
      price: 120000,
      teacher: "박지훈",
      img: "assets/icon-programs.jpg",
      lessons: ["과정 소개", "이론 강의", "실습 안내", "평가"]
    },
    {
      id: "lifelong",
      cat: "평생",
      type: "free",
      name: "평생교육 · 성인문해",
      desc: "성인문해와 직업훈련으로 학습을 이어 갑니다.",
      period: "8주",
      price: 0,
      teacher: "이서연",
      img: "assets/icon-about.jpg",
      lessons: ["학습 안내", "기초 문해", "생활 활용", "마무리"]
    }
  ];

  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  };
  const save = (data) => localStorage.setItem(KEY, JSON.stringify(data));
  const state = () => {
    const s = load();
    if (!s.users) s.users = [];
    if (!s.session) s.session = null;
    if (!s.enrolls) s.enrolls = {};
    if (!s.attend) s.attend = {};
    if (!s.pays) s.pays = {};
    if (!s.resume) s.resume = {};
    return s;
  };
  const money = (n) => n ? n.toLocaleString("ko-KR") + "원" : "무료";

  const api = {
    PUBLIC,
    courses: COURSES,
    money,
    course(id) { return COURSES.find((c) => c.id === id) || null; },
    user() {
      const s = state();
      return s.users.find((u) => u.email === s.session) || null;
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
      s.pays[user.email].push({ id, at: new Date().toISOString(), amount: api.course(id).price });
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
      const user = api.user();
      const slot = document.querySelector("[data-user]");
      if (slot) {
        slot.innerHTML = user
          ? '<a href="account.html">' + user.name + "</a> · <button type=\"button\" id=\"lmsOut\">로그아웃</button>"
          : '<a href="login.html">로그인</a> · <a href="register.html">회원가입</a>';
        const out = document.getElementById("lmsOut");
        if (out) out.onclick = () => { api.logout(); location.href = "index.html"; };
      }
      const pub = document.querySelectorAll("[data-public]");
      pub.forEach((a) => {
        const path = a.getAttribute("data-public") || "index.html";
        a.href = PUBLIC + path;
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
