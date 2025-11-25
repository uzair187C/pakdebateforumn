// Simple UI helpers
document.addEventListener('DOMContentLoaded', function(){
  // set year in footers
  const year = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // mobile menu toggle
  const menuBtns = document.querySelectorAll('.menu-btn');
  menuBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.nav');
      if(!nav) return;
      if(nav.style.display==='flex'){nav.style.display='none';}
      else {nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='8px';}
    });
  });
});
