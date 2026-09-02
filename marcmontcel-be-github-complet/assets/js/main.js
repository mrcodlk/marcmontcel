
const button = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
if(button && menu){
  button.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    button.setAttribute('aria-expanded','false');
  }));
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
