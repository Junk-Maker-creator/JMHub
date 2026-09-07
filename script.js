document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => link.addEventListener('click', e => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
}));

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
