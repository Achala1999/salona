window.onload = function() {
  const loader = document.getElementById('loader');
  const video = document.getElementById('bgVideo');

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 1000);
    
    if(video) video.style.opacity = '1';

    // Animations trigger
    setTimeout(() => { document.getElementById('logo').classList.add('show'); }, 500);
    setTimeout(() => { document.getElementById('hero').classList.add('show'); }, 800);
    setTimeout(() => { document.getElementById('sub').classList.add('show'); }, 1100);
    setTimeout(() => { document.getElementById('btn').classList.add('show'); }, 1400);
    setTimeout(() => { document.getElementById('logo-slider').style.opacity = '1'; }, 1700);
  }, 1500);
};

// සුපිරි වේගයෙන් පේජ් මාරු කරන function එක
function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}