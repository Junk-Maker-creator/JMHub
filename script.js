// Native anchors preserve URL hashes, history and reduced-motion preferences.
const navigation = document.querySelector('.nav');
const sectionLinks = [...document.querySelectorAll('.nav nav a[href^="#"]')];
const navigationSections = sectionLinks.map(link => ({
  link,
  section: document.getElementById(link.hash.slice(1))
})).filter(item => item.section);
let navigationFrame = 0;

function updateNavigation() {
  navigationFrame = 0;
  const offset = (navigation?.getBoundingClientRect().height || 0) + 16;
  document.documentElement.style.setProperty('--anchor-offset', `${offset}px`);
  let current = navigationSections[0];
  for (const item of navigationSections) {
    if (item.section.getBoundingClientRect().top <= offset + 1) current = item;
  }
  // The final section may be too short to reach the top of the viewport.
  if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = navigationSections[navigationSections.length - 1];
  }
  for (const item of navigationSections) {
    const active = item === current;
    item.link.classList.toggle('active', active);
    if (active) item.link.setAttribute('aria-current', 'location');
    else item.link.removeAttribute('aria-current');
  }
}

function scheduleNavigationUpdate() {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateNavigation);
}

window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
window.addEventListener('hashchange', scheduleNavigationUpdate);
window.addEventListener('load', scheduleNavigationUpdate);
if (navigation && typeof ResizeObserver !== 'undefined') {
  new ResizeObserver(scheduleNavigationUpdate).observe(navigation);
}
updateNavigation();

const csdnColumnUrl = 'https://blog.csdn.net/2302_78130397/category_13202432.html?fromshare=blogcolumn&sharetype=blogcolumn&sharerId=13202432&sharerefer=PC&sharesource=2302_78130397&sharefrom=from_link';
const notesRow = document.querySelector('#notes .empty-row');
const notesStat = document.querySelector('.stats .wrap > div:nth-child(2)');

if (notesRow) {
  notesRow.classList.add('csdn-column');
  notesRow.innerHTML = `<div class="column-cover" aria-hidden="true"></div><div class="column-content"><span>STRUCTURAL DESIGN · CSDN COLUMN</span><b>结构设计基础知识</b><small>记录结构设计的学习过程与基础知识。</small></div><a href="${csdnColumnUrl}" target="_blank" rel="noopener noreferrer">进入专栏　→</a>`;
}

if (notesStat) {
  notesStat.querySelector('b').textContent = '01';
  notesStat.querySelector('span').innerHTML = '学习专栏<br><small>CSDN Column</small>';
}

const printCostCalculatorUrl = 'https://junk-maker-creator.github.io/hcjsqV2/';
const toolsRow = document.querySelector('#tools .empty-row');
const toolsStat = document.querySelector('.stats .wrap > div:nth-child(3)');

if (toolsRow) {
  toolsRow.classList.add('print-tool');
  toolsRow.innerHTML = `<a class="print-tool-link" href="${printCostCalculatorUrl}" target="_blank" rel="noopener noreferrer" aria-label="打开 3D打印代打成本计算器"><div class="print-tool-cover" aria-hidden="true"></div><div class="print-tool-content"><span>3D PRINTING · ONLINE TOOL</span><b>3D打印代打成本计算器</b><small>从报价、交付到库存扣减，一站核算材料、工时、损耗与利润，让每笔订单成本更清楚。</small><div class="tool-tags"><i>智能报价</i><i>库存联动</i><i>利润复盘</i></div></div><strong>立即使用 <em>→</em></strong></a>`;
}

if (toolsStat) {
  toolsStat.querySelector('b').textContent = '01';
  toolsStat.querySelector('span').innerHTML = '在线工具<br><small>Online Tools</small>';
}

document.querySelector('footer nav')?.remove();
document.querySelector('#tools .section-head > a')?.remove();
document.querySelector('.actions')?.remove();

const deskCalendarUrl = 'https://github.com/Junk-Maker-creator/Electronic-desk-calendar';
const deskCalendarCard = document.querySelector('.cards article:first-child');

if (deskCalendarCard) {
  deskCalendarCard.classList.add('desk-calendar-card');
  deskCalendarCard.innerHTML = `<a class="project-card-link" href="${deskCalendarUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 GitHub 打开桌面电子日历项目"><div class="thumb desk-calendar"><span>ESP32-S3</span></div><div class="card-content"><p>Arduino · LVGL · Hardware</p><h3>桌面电子日历</h3><small>把时间、日历、待办、天气和工作状态放进一块桌面屏幕，支持 Wi‑Fi 配网与手机端本地控制。</small><footer><span>7 英寸触控屏</span><i>GitHub ↗</i></footer></div></a>`;
}

document.querySelectorAll('.cards article:nth-child(n + 2)').forEach(card => {
  card.classList.add('coming-soon-card');
  card.innerHTML = `<div class="thumb coming-soon-thumb"><span>UP NEXT</span><b>+</b></div><div class="card-content"><p>IN DEVELOPMENT</p><h3>敬请期待</h3><small>新的开源项目正在打磨中，准备好后会在这里发布。</small><footer><span>COMING SOON</span></footer></div>`;
});
