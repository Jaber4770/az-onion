# 🧅 BIRTHDAY ONION — Hacker Birthday Website

## QUICK START

1. **Open `index.html`** in any browser. That's it.

## CUSTOMIZE IT

Edit the `CONFIG` block at the top of `script.js`:

```js
const CONFIG = {
  name: "LEGEND",            // ← Birthday person's name
  password: "legend",        // ← Login password (lowercase)
  birthdayDate: new Date("2025-05-19"), // ← Their birthday
  specialMessage: `...`,     // ← Your personal message
  memories: [...],           // ← Photo cards + captions
}
```

## ADD PHOTOS

Drop your photos into `assets/` and update the `memories` array:
```js
{ emoji: "📸", title: "MEMORY_FILE_001.ENC", desc: "Caption here", img: "assets/photo1.jpg" }
```

## ADD MUSIC

Put an `.mp3` file in `assets/` named `music.mp3`.  
Suggested: any ambient/synthwave/lofi track.

## FEATURES

| Feature | Details |
|---|---|
| 🔐 Login screen | Password = person's name (lowercase) |
| 💻 Terminal animation | Fake hacker boot sequence |
| 🎂 Birthday message | Glitch effect + badges |
| 🖼 Memory gallery | Photo cards with scan effect |
| 💌 Special message | Typewriter reveal |
| ⏱ Countdown | Auto-calculates next birthday |
| 🎵 Music player | Floating ambient player |
| 🐣 Easter egg | Click `> sudo --secret-mode` OR type Konami code (↑↑↓↓←→←→BA) |
| 🌧 Matrix rain | Always running in background |
| ⚡ Random glitch | Screen glitches randomly |

## DEPLOY (optional)

Upload the whole folder to any static host:
- **GitHub Pages** (free)
- **Netlify** (free, drag & drop)
- **Vercel** (free)

---
*Hosted secretly on the dark web for the legend.* 🧅
