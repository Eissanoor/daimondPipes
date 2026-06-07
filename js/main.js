
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if(navToggle){navToggle.addEventListener('click',()=>{navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',navMenu.classList.contains('open'))})}
document.querySelectorAll('.nav-item.has-dropdown > .nav-link').forEach(link=>{
  link.addEventListener('click',e=>{if(window.innerWidth<=1050){e.preventDefault();link.parentElement.classList.toggle('open')}})
});
const slides=[...document.querySelectorAll('.hero-slide')], dots=[...document.querySelectorAll('.hero-dot')];
let slideIndex=0, slideTimer;
function showSlide(i){if(!slides.length)return;slideIndex=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===slideIndex));dots.forEach((d,n)=>d.classList.toggle('active',n===slideIndex));}
function autoSlide(){if(slides.length<=1)return;clearInterval(slideTimer);slideTimer=setInterval(()=>showSlide(slideIndex+1),5500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);autoSlide()}));showSlide(0);autoSlide();
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const lb=document.querySelector('.lightbox');const img=lb.querySelector('img');img.src=item.querySelector('img').src;img.alt=item.querySelector('img').alt;lb.classList.add('open')}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>document.querySelector('.lightbox').classList.remove('open'));
document.querySelector('.lightbox')?.addEventListener('click',e=>{if(e.target.classList.contains('lightbox'))e.currentTarget.classList.remove('open')});

const WA_NUMBER = '923359201000';

function waLink(title, fields){
  const lines = fields.filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`);
  const msg = encodeURIComponent(`${title}\n\n${lines.join('\n')}`);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

function bindWaForm(formId, title, fieldMap){
  const form = document.querySelector(formId);
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(form);
    const fields = fieldMap.map(([label, key])=>[label, fd.get(key) || '']);
    window.open(waLink(title, fields), '_blank');
  });
}

bindWaForm('#quoteForm', 'Quotation Request - Diamond PVC', [
  ['Name', 'name'], ['Phone', 'phone'], ['Email', 'email'],
  ['Company', 'company'], ['Product', 'product'], ['Quantity/Size', 'quantity'],
  ['Location', 'location'], ['Message', 'message']
]);

bindWaForm('#contactForm', 'Contact Enquiry - Diamond PVC', [
  ['Name', 'name'], ['Phone', 'phone'], ['Email', 'email'],
  ['Company', 'company'], ['Product Required', 'product'], ['Message', 'message']
]);

bindWaForm('#dealerForm', 'Dealer Inquiry - Diamond PVC', [
  ['Name', 'name'], ['Phone', 'phone'], ['Email', 'email'],
  ['Company/Shop', 'company'], ['City/Area', 'city'],
  ['Experience', 'experience'], ['Message', 'message']
]);

bindWaForm('#careerForm', 'Job Application - Diamond PVC', [
  ['Full Name', 'name'], ['Father Name', 'father_name'], ['CNIC', 'cnic'],
  ['Phone', 'phone'], ['Email', 'email'], ['City', 'city'],
  ['Qualification', 'qualification'], ['Experience', 'experience'],
  ['Position', 'position'], ['Message', 'message'],
  ['Note', 'Please email CV to mspvcpipe@yahoo.com']
]);

document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(el=>{el.style.display=(filter==='all'||el.dataset.category===filter)?'grid':'none'})}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
