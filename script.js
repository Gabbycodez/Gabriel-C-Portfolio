/* ============================================
   BUBBLE WRAP BORDER
   ============================================ */
const rows = {
  top: document.getElementById('bubbleTop'),
  bottom: document.getElementById('bubbleBottom'),
  left: document.getElementById('bubbleLeft'),
  right: document.getElementById('bubbleRight'),
};

const POPPED_KEY = 'poppedBubbles';

function getPopped() {
  try { return new Set(JSON.parse(localStorage.getItem(POPPED_KEY) || '[]')); }
  catch { return new Set(); }
}
function savePopped(set) {
  try { localStorage.setItem(POPPED_KEY, JSON.stringify([...set])); } catch {}
}

let audioCtx;
function playPop() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(520 + Math.random() * 180, audioCtx.currentTime);
    o.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.09);
    g.gain.setValueAtTime(0.18, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    o.connect(g).connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + 0.1);
  } catch {}
}

function makeBubble(id) {
  const b = document.createElement('button');
  b.className = 'bubble';
  b.type = 'button';
  b.dataset.id = id;
  b.setAttribute('aria-label', 'Bubble wrap, pop it');
  const burst = document.createElement('span');
  burst.className = 'pop-burst';
  b.appendChild(burst);

  const popped = getPopped();
  if (popped.has(id)) b.classList.add('popped');

  b.addEventListener('click', () => {
    if (b.classList.contains('popped')) return;
    b.classList.add('popped', 'just-popped');
    playPop();
    const set = getPopped();
    set.add(id);
    savePopped(set);
    setTimeout(() => b.classList.remove('just-popped'), 400);
  });

  return b;
}

function fillRow(el, count, prefix) {
  el.innerHTML = '';
  for (let i = 0; i < count; i++) {
    el.appendChild(makeBubble(`${prefix}-${i}`));
  }
}

function layoutBubbles() {
  const frame = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--frame')) || 56;
  const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bubble-gap')) || 52;

  const hCount = Math.max(3, Math.floor((window.innerWidth - frame * 2) / gap));
  const vCount = Math.max(3, Math.floor((window.innerHeight - frame * 2) / gap));

  fillRow(rows.top, hCount, 'top');
  fillRow(rows.bottom, hCount, 'bottom');
  fillRow(rows.left, vCount, 'left');
  fillRow(rows.right, vCount, 'right');
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layoutBubbles, 150);
});

layoutBubbles();

/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================
   FOOTER YEAR
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();

const profilePhoto = document.getElementById("profilePhoto");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

if(profilePhoto){

    profilePhoto.addEventListener("click",()=>{

        imageModal.classList.add("active");

        modalImage.src = profilePhoto.src;

    });

    closeModal.addEventListener("click",()=>{

        imageModal.classList.remove("active");

    });

    imageModal.addEventListener("click",(e)=>{

        if(e.target===imageModal){

            imageModal.classList.remove("active");

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            imageModal.classList.remove("active");

        }

    });

}