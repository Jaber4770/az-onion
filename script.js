/* ═══════════════════════════════════════
   HACKER BIRTHDAY — script.js
═══════════════════════════════════════ */

// ──────────────────────────────────────
// CONFIG — Edit these!
// ──────────────────────────────────────
const CONFIG = {
  name: "SHAKIL",          // Birthday person's name (used in login hint too)
  password: "shakil",      // Lowercase password (matches hint)
  birthdayDate: new Date("2025-05-19"), // Set to next birthday
  specialMessage: `> SUBJECT: MD ASHADUZZAMAN SHAKIL
> CLEARANCE: MAXIMUM
> STATUS: ABSOLUTE LEGEND

They say great engineers build structures.
You build empires.

While others follow blueprints,
you rewrite them mid-execution —
solar plants, joint ventures, infrastructure
all delivered flawlessly, on your watch.

4+ years on-site taught you what no
classroom ever could: that the best
builders don't just manage projects,
they LEAD people through chaos.

And when the hard hat comes off?
You're running THREE companies.
  > Cqube International — global shipping
  > Apprent Global — shaping futures
  > Cqube Mart — B2B tech distribution

Civil Engineer. Entrepreneur. Mentor.
MIAENG. MIDEB. AEC Specialist.

You don't just turn complex plans
into flawless execution —
you turn ordinary days into
extraordinary ones, just by showing up.

Happy Birthday, Shakil.
The blueprints of your life are
already a masterpiece.

  — From those who know your worth 💚`,
  memories: [
    {
      emoji: "📸",
      title: "MEMORY_FILE_001.ENC",
      desc: "Add your photo here — replace assets/photo1.jpg",
      img: "assets/photo1.jpg"
    },
    {
      emoji: "🔥",
      title: "MEMORY_FILE_002.ENC",
      desc: "Add your photo here — replace assets/photo2.jpg",
      img: "assets/photo2.jpg"
    },
    {
      emoji: "💀",
      title: "MEMORY_FILE_003.ENC",
      desc: "That time everything went wrong but it was perfect",
      img: null
    },
    {
      emoji: "🌐",
      title: "MEMORY_FILE_004.ENC",
      desc: "The mission no one talks about. You know the one.",
      img: null
    },
    {
      emoji: "🎯",
      title: "MEMORY_FILE_005.ENC",
      desc: "Every plan we made that somehow worked.",
      img: null
    },
    {
      emoji: "⚡",
      title: "MEMORY_FILE_006.ENC",
      desc: "Classified. Level 10 clearance required.",
      img: null
    }
  ],
  easterEgg: `> konami_code --unlocked\n\nCONGRATULATIONS, GHOST.\n\nYou found the hidden protocol.\n\nThis means you're either:\n  [1] A true hacker\n  [2] Absurdly curious\n  [3] Both (most likely)\n\nYour secret achievement:\n  🏆 "GHOST IN THE MACHINE"\n\nPassword for next year's party:\n  > xX_LEGEND_Xx_2025\n\nNow get back to celebrating. 🎉`
};

// ──────────────────────────────────────
// MATRIX RAIN
// ──────────────────────────────────────
(function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let cols, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 16);
    drops = Array(cols).fill(1);
  }

  resize();
  window.addEventListener('resize', resize);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01ﾊﾋﾌﾍﾎABCDEFGHIJKLMNOP0123456789@#$%&';

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '14px Share Tech Mono';

    for (let i = 0; i < drops.length; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff41';
      ctx.fillText(ch, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 50);
})();

// ──────────────────────────────────────
// FAKE IP RANDOMIZER
// ──────────────────────────────────────
(function fakeIP() {
  const el = document.getElementById('fake-ip');
  if (!el) return;
  setInterval(() => {
    const r = () => Math.floor(Math.random() * 256);
    el.textContent = `${r()}.${r()}.${r()}.${r()}`;
  }, 1500);
})();

// ──────────────────────────────────────
// LOGIN PROMPT TYPEWRITER
// ──────────────────────────────────────
const loginLines = [
  "> connecting to dark web...",
  "> routing through 7 proxies...",
  "> firewall bypassed.",
  "> enter passphrase to decrypt:"
];

function typeLoginPrompt() {
  const el = document.getElementById('login-prompt');
  let lineIdx = 0, charIdx = 0, text = '';

  function typeNext() {
    if (lineIdx >= loginLines.length) return;
    if (charIdx < loginLines[lineIdx].length) {
      text += loginLines[lineIdx][charIdx];
      el.textContent = text;
      charIdx++;
      setTimeout(typeNext, Math.random() * 40 + 20);
    } else {
      text += '\n';
      el.textContent = text;
      lineIdx++;
      charIdx = 0;
      setTimeout(typeNext, 400);
    }
  }
  typeNext();
}

// ──────────────────────────────────────
// LOGIN LOGIC
// ──────────────────────────────────────
function attemptLogin() {
  const input = document.getElementById('password-input').value.trim().toLowerCase();
  const errEl = document.getElementById('login-error');

  if (input === CONFIG.password) {
    errEl.textContent = '';
    document.getElementById('login-btn').textContent = '[ ACCESS GRANTED... ]';
    setTimeout(() => showSection('access-screen', true), 600);
  } else {
    errEl.textContent = `> ERROR: PASSPHRASE REJECTED — ${input.length ? `"${input}" is incorrect.` : 'empty input detected.'}`;
    document.getElementById('password-input').value = '';
    document.getElementById('password-input').style.animation = 'glitch-small 0.3s';
    setTimeout(() => document.getElementById('password-input').style.animation = '', 300);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeLoginPrompt();
  document.getElementById('password-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') attemptLogin();
  });
  buildMemories();
  startCountdown();
  setTimeout(typeMessage, 100);
});

// ──────────────────────────────────────
// SECTION SWITCHER
// ──────────────────────────────────────
function showSection(id, doTerminal = false) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  const target = document.getElementById(id);
  target.style.display = 'flex';
  requestAnimationFrame(() => target.classList.add('active'));

  if (id === 'access-screen') runTerminalSequence();
  if (id !== 'login-screen') {
    document.getElementById('music-player').classList.remove('hidden');
    document.getElementById('main-footer').classList.remove('hidden');
  }
}

// ──────────────────────────────────────
// TERMINAL SEQUENCE
// ──────────────────────────────────────
const terminalScript = [
  { text: "$ sudo ./birthday_protocol.sh --target=SHAKIL", cls: "success", delay: 0 },
  { text: "", cls: "empty", delay: 300 },
  { text: "[    0.001] kernel: initializing surprise...", cls: "success", delay: 600 },
  { text: "[    0.042] net: routing through onion network...", cls: "success", delay: 900 },
  { text: "[    0.087] crypto: decrypting memories... ████░░░░ 42%", cls: "warning", delay: 1200 },
  { text: "[    0.131] crypto: decrypting memories... ████████ 100%", cls: "success", delay: 1700 },
  { text: "[    0.200] mem: loading classified files...", cls: "success", delay: 2100 },
  { text: "[    0.251] WARNING: emotional content detected", cls: "danger", delay: 2500 },
  { text: "[    0.300] sys: preparing birthday payload...", cls: "success", delay: 2900 },
  { text: "", cls: "empty", delay: 3300 },
  { text: ">> SCANNING SUBJECT PROFILE...", cls: "info", delay: 3600 },
  { text: ">> LEGEND STATUS: ██████████ CONFIRMED", cls: "info", delay: 4000 },
  { text: ">> AWESOMENESS LEVEL: OFF THE CHARTS", cls: "info", delay: 4400 },
  { text: ">> THREAT LEVEL: DANGEROUS (to the haters)", cls: "warning", delay: 4800 },
  { text: "", cls: "empty", delay: 5200 },
  { text: "██████████████████████████████████████████", cls: "success", delay: 5500 },
  { text: "  ██  HAPPY BIRTHDAY DETECTED  ██", cls: "big", delay: 5800 },
  { text: "██████████████████████████████████████████", cls: "success", delay: 6100 },
  { text: "", cls: "empty", delay: 6400 },
  { text: "[    1.000] ACCESS GRANTED. WELCOME, LEGEND.", cls: "success", delay: 6700 },
];

function runTerminalSequence() {
  const body = document.getElementById('terminal-body');
  body.innerHTML = '';

  terminalScript.forEach(({ text, cls, delay }) => {
    setTimeout(() => {
      const line = document.createElement('span');
      line.className = `terminal-line ${cls}`;
      line.textContent = text;
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;

      // Advance to birthday screen after last line
      if (delay >= 6700) {
        setTimeout(() => showSection('birthday-screen'), 1400);
      }
    }, delay);
  });
}

// ──────────────────────────────────────
// BIRTHDAY SCREEN
// ──────────────────────────────────────
function typeBirthdayText() {
  const nameEl = document.getElementById('birthday-name-display');
  nameEl.textContent = CONFIG.name;

  const subEl = document.getElementById('typed-birthday');
  const lines = [
    "You have been identified as a certified legend.",
    "System integrity: flawless. Vibes: immaculate.",
    "Today the dark web celebrates you. 🎉"
  ];
  let i = 0;
  function showLine() {
    if (i >= lines.length) return;
    subEl.textContent = lines[i];
    i++;
    setTimeout(showLine, 3000);
  }
  showLine();
}

// Patch showSection to also fire birthday typing
const _origShow = showSection;
window.showSection = function(id, doTerminal) {
  _origShow(id, doTerminal);
  if (id === 'birthday-screen') setTimeout(typeBirthdayText, 300);
};

// ──────────────────────────────────────
// MEMORY GALLERY
// ──────────────────────────────────────
function buildMemories() {
  const grid = document.getElementById('memories-grid');
  CONFIG.memories.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.style.animationDelay = `${i * 0.1}s`;

    const imgHTML = m.img
      ? `<img src="${m.img}" alt="${m.title}" onerror="this.parentElement.innerHTML='<div class=\\'memory-placeholder\\'>${m.emoji}</div>'">`
      : `<div class="memory-placeholder">${m.emoji}</div>`;

    card.innerHTML = `
      <div class="memory-img-wrapper">
        ${imgHTML}
        <div class="memory-scan-line"></div>
        <div class="memory-label">CLASSIFIED</div>
      </div>
      <div class="memory-info">
        <div class="memory-title">${m.title}</div>
        <div class="memory-desc">${m.desc}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ──────────────────────────────────────
// SPECIAL MESSAGE
// ──────────────────────────────────────
function typeMessage() {
  const el = document.getElementById('message-body');
  const text = CONFIG.specialMessage;
  let i = 0;
  el.textContent = '';

  // Only start typing when section is visible
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && i === 0) {
      function type() {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          el.scrollTop = el.scrollHeight;
          setTimeout(type, 18);
        }
      }
      type();
    }
  });
  observer.observe(el);
}

// ──────────────────────────────────────
// COUNTDOWN
// ──────────────────────────────────────
function startCountdown() {
  function update() {
    const now = new Date();
    let target = new Date(CONFIG.birthdayDate);
    // Always point to next birthday
    target.setFullYear(now.getFullYear());
    if (target <= now) target.setFullYear(now.getFullYear() + 1);

    const diff = target - now;
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);

    document.getElementById('cd-days').textContent  = String(days).padStart(3, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ──────────────────────────────────────
// MUSIC PLAYER
// ──────────────────────────────────────
let musicPlaying = false;
const audio = document.getElementById('bg-music');

// Handle autoplay — update UI once audio starts
audio.addEventListener('play', () => {
  musicPlaying = true;
  document.getElementById('music-toggle').textContent = '⏸ PAUSE';
  document.getElementById('music-viz').classList.add('playing');
});
audio.addEventListener('pause', () => {
  musicPlaying = false;
  document.getElementById('music-toggle').textContent = '▶ PLAY';
  document.getElementById('music-viz').classList.remove('playing');
});

function toggleMusic() {
  const btn = document.getElementById('music-toggle');
  const viz = document.getElementById('music-viz');

  if (!musicPlaying) {
    audio.play().then(() => {
      musicPlaying = true;
      btn.textContent = '⏸ PAUSE';
      viz.classList.add('playing');
    }).catch(() => {
      btn.textContent = '⚠ NO FILE';
    });
  } else {
    audio.pause();
    musicPlaying = false;
    btn.textContent = '▶ PLAY';
    viz.classList.remove('playing');
  }
}

// ──────────────────────────────────────
// EASTER EGG
// ──────────────────────────────────────
function triggerEasterEgg() {
  const overlay = document.getElementById('easter-overlay');
  const content = document.getElementById('easter-content');
  overlay.classList.remove('hidden');
  content.textContent = '';
  let i = 0;
  const text = CONFIG.easterEgg;
  function type() {
    if (i < text.length) {
      content.textContent += text[i];
      i++;
      setTimeout(type, 20);
    }
  }
  type();
}

function closeEasterEgg() {
  document.getElementById('easter-overlay').classList.add('hidden');
}

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI = [38,38,40,40,37,39,37,39,66,65];
let konamiIdx = 0;
document.addEventListener('keydown', e => {
  if (e.keyCode === KONAMI[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === KONAMI.length) {
      triggerEasterEgg();
      konamiIdx = 0;
    }
  } else {
    konamiIdx = 0;
  }
});

// Close easter egg on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeEasterEgg();
});

// ──────────────────────────────────────
// GLITCH EFFECT — random screen glitch
// ──────────────────────────────────────
function randomGlitch() {
  const body = document.body;
  body.style.transform = `translate(${(Math.random()-0.5)*4}px, ${(Math.random()-0.5)*2}px)`;
  body.style.filter = `hue-rotate(${Math.random()*20}deg)`;
  setTimeout(() => {
    body.style.transform = '';
    body.style.filter = '';
  }, 80);
}

setInterval(() => {
  if (Math.random() < 0.08) randomGlitch();
}, 3000);
