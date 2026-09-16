/* ==========================================================================
   main.js — 设计系统示例页所需的少量交互（无依赖，原生 JS）
   1. 移动端导航菜单开合
   2. 可关闭的提示横幅（.alert 内放 .alert-dismiss 即自动生效）
   ========================================================================== */

/* ---------- 1. 移动端导航 ---------- */

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  // 切换菜单开合
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "打开导航菜单" : "关闭导航菜单"
    );
  });

  // 按 Esc 关闭菜单
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "打开导航菜单");
      navToggle.focus();
    }
  });

  // 窗口拉宽到桌面尺寸时，重置菜单状态
  window.matchMedia("(min-width: 821px)").addEventListener("change", (event) => {
    if (event.matches) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "打开导航菜单");
    }
  });
}

/* ---------- 2. 可关闭的提示横幅 ---------- */

document.querySelectorAll(".alert-dismiss").forEach((button) => {
  button.addEventListener("click", () => {
    const alert = button.closest(".alert");
    if (alert) {
      alert.remove();
    }
  });
});
