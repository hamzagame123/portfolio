const navLinks=[...document.querySelectorAll('nav a[href^="#"]')];
const sections=[...document.querySelectorAll('main section[id],footer[id]')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -55% 0px',threshold:0});sections.forEach(s=>observer.observe(s));
window.addEventListener('scroll',()=>{if(window.scrollY<100)navLinks.forEach(a=>a.removeAttribute('aria-current'));},{passive:true});
const copy=document.querySelector('#copy-email'),status=document.querySelector('#copy-status');let reset;
copy.addEventListener('click',async()=>{clearTimeout(reset);try{await navigator.clipboard.writeText('Hamzagalbete99@gmail.com');copy.textContent='Email copied';status.textContent='Email address copied to your clipboard.';}catch{status.textContent='Hamzagalbete99@gmail.com';}reset=setTimeout(()=>{copy.textContent='Copy email';status.textContent='';},5000);});
const portrait=document.querySelector('.portrait');
const tiltAllowed=matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
portrait.addEventListener('pointermove',event=>{if(!tiltAllowed.matches||reducedMotion.matches)return;const rect=portrait.getBoundingClientRect();const x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));const y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));portrait.style.setProperty('--portrait-x',`${-y*5}deg`);portrait.style.setProperty('--portrait-y',`${x*5}deg`);});
function resetPortrait(){portrait.style.setProperty('--portrait-x','0deg');portrait.style.setProperty('--portrait-y','0deg');}
portrait.addEventListener('pointerleave',resetPortrait);portrait.addEventListener('pointercancel',resetPortrait);reducedMotion.addEventListener('change',resetPortrait);
