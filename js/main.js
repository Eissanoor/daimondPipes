
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if(navToggle){navToggle.addEventListener('click',()=>{navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',navMenu.classList.contains('open'))})}
document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link=>{
  link.addEventListener('click',e=>{if(window.innerWidth<=1050){e.preventDefault();link.parentElement.classList.toggle('open')}})
});
const slides=[...document.querySelectorAll('.hero-slide')], dots=[...document.querySelectorAll('.hero-dot')];
let slideIndex=0, slideTimer;
function showSlide(i){if(!slides.length)return;slideIndex=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===slideIndex));dots.forEach((d,n)=>d.classList.toggle('active',n===slideIndex));}
function autoSlide(){clearInterval(slideTimer);slideTimer=setInterval(()=>showSlide(slideIndex+1),5500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);autoSlide()}));showSlide(0);autoSlide();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const lb=document.querySelector('.lightbox');const img=lb.querySelector('img');img.src=item.querySelector('img').src;img.alt=item.querySelector('img').alt;lb.classList.add('open')}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>document.querySelector('.lightbox').classList.remove('open'));
document.querySelector('.lightbox')?.addEventListener('click',e=>{if(e.target.classList.contains('lightbox'))e.currentTarget.classList.remove('open')});
const quoteForm=document.querySelector('#quoteForm');
if(quoteForm){quoteForm.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(quoteForm);const msg=`Quotation Request - Diamond PVC%0A%0AName: ${encodeURIComponent(fd.get('name'))}%0APhone: ${encodeURIComponent(fd.get('phone'))}%0ACompany: ${encodeURIComponent(fd.get('company')||'N/A')}%0AProduct: ${encodeURIComponent(fd.get('product'))}%0AQuantity/Size: ${encodeURIComponent(fd.get('quantity')||'N/A')}%0ALocation: ${encodeURIComponent(fd.get('location')||'N/A')}%0AMessage: ${encodeURIComponent(fd.get('message')||'')}`;window.open(`https://wa.me/923359201000?text=${msg}`,'_blank')})}
document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(el=>{el.style.display=(filter==='all'||el.dataset.category===filter)?'grid':'none'})}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
