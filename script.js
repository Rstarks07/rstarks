const output = document.getElementById("output");
const input = document.getElementById("input");
const logFeed = document.getElementById("log-feed");
let ai_help = 0;
const commands = {
  "whoami": "rstarks — anomaly.001 — node in the web.",
  "about": "Just a curious mind turning thought into code. Dreaming in code.",
  "contact": () => {
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
      <h3>Contact</h3>
      <p>Discord: everynight</p>
    `;
    return contactInfo;
  },
  "sleep": () => {
    const overlay = document.createElement('div');
    overlay.className = 'sleep-fade';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'black';
    overlay.style.zIndex = 9999;
    overlay.style.cursor = 'pointer';

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    overlay.appendChild(canvas);

    // Matrix rain effect
    const ctx = canvas.getContext('2d');
    const katakana = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = katakana[Math.floor(Math.random() * katakana.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    // Fade out on click
    overlay.addEventListener('click', () => {
      cancelAnimationFrame(animationId);
      overlay.classList.add('hide');
      setTimeout(() => overlay.remove(), 1200); // Match transition duration
    });

    // Responsive resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return overlay;
  },
  "skills": () => {

    const styleskills = document.createElement('style');
    styleskills.textContent = `
.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: pre;
  margin: 0 auto;
  letter-spacing: .15em;
  width: 74ch;
  animation:
    typing 3s steps(74, end) 1 normal both,
    blink-caret .75s step-end 4,
    caret-hide 0.01s linear 1.5s forwards;
}
@keyframes typing {
  from { width: 0 }
  to { width: 74ch }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
@keyframes caret-hide {
  to { border-color: transparent; }
}
.skill-node {
  cursor: pointer;
  transition: text-shadow 0.3s;
}

.skill-node:hover {
  text-shadow: 0 0 8px #ff00c8;
}
`;
    const skills = document.createElement('div');
    skills.innerHTML = `<div class="typewriter skill-node">Skills:
   Core Systems
 ├─ Lua         ■■■■■■■    (60%)
 ├─ Python      ■■■■■■■■   (80%)
 └─ C#          ■■■■■■░░░░ (60%)
   Neural Interfaces
 ├─ JavaScript  ■■■■■■░░░░ (60%)
 └─ HTML/CSS    ■■■■■■■■░░ (80%)</div>`;
    const depo = document.createElement('div');
    depo.appendChild(styleskills);
    depo.appendChild(skills);
    return depo;
  },
  "projects": () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      #projects-section {
        display: flex;
        gap: 20px;
        padding: 20px;
        justify-content: center;
        flex-wrap: wrap;
        animation: fade 1s;
      }
      .project-card {
        background: rgba(165, 173, 49, 0.06);
        border: 1px solid #ff00c833;
        border-radius: 8px;
        padding: 20px;
        width: 280px;
        box-shadow: 0 0 15px #ff00c855;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        text-shadow: 0 0 2px #ff00c8;
        font-family: monospace;
      }
      .project-card:hover {
        cursor: cell;
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 0 30px #ff00c8aa;
        background: rgba(255, 0, 200, 0.09);
      }
      .project-card h3 {
        margin: 0;
        font-size: 20px;
        color: #ff99ff;
      }
      .project-card p {
        font-size: 14px;
        color: #fff;
        margin: 10px 0;
      }
      .project-card span {
        font-size: 12px;
        color: #00f0ff;
      }
    `;
    const projectsSection = document.createElement('div');
    projectsSection.id = 'projects-section';
    const projects = [
      {
        title: "glitch-lab",
        description: "A web experiment to visualize data distortion and memory fragmentation.",
        tech: "JS • WebGL • GSAP"
      },
      {
        title: "mindsim.html",
        description: "Simulation UI for abstract thoughts and AI dreams.",
        tech: "HTML • JS • Terminal FX"
      },
      {
        title: "Discord Bot",
        description: "A fully functional discord bot for personal use.",
        tech: "Pycord • Python • NiceBots"
      },
      {
        title: "Play With Me",
        description: "A game related with chemistry for a TUBITAK 4006 project.",
        tech: "Unity • C# • 2D"
      },
      {
        title: "Backdoor",
        description: "Backdoor with download/upload feature.",
        tech: "Sockets • Python • Bash"
      }
    ];
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const title = document.createElement('h3');
      title.textContent = project.title;
      const desc = document.createElement('p');
      desc.textContent = project.description;
      const tech = document.createElement('span');
      tech.textContent = project.tech;
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(tech);
      projectsSection.appendChild(card);
    });
    const container = document.createElement('div');
    container.appendChild(style);
    container.appendChild(projectsSection);
    return container;
  },
  "cat quote.txt": () => {
    const quotes = [
      "\"The glitch is the truth revealing itself.\"",
      "\"Systems fail. People adapt.\"",
      "\"You're not broken — you're being rewritten.\"",
      "\"Build even when no one is watching.\""
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  },
  "clear": "clear",
  "help": `     Available commands:\n
     [Basic]\n
       whoami      - Display user identity\n
       about       - Brief description\n
       help        - Show this help\n
       clear       - Clear the terminal\n
     [Projects]\n
       projects    - List my projects\n
       skills      - Show skills tree\n
     [System]\n
       sleep       - Activate matrix screensaver\n
       cat quote.txt - Display a random quote\n
     [Contact]\n
       contact    - Show contact information\n
     `,
};

function print(text) {
  const line = document.createElement("div");
  if (text instanceof HTMLElement) {
    line.appendChild(text);
  } else {
    line.innerHTML = text.replace(/\n/g, "<br>");
  }
  output.appendChild(line); // Add at the bottom like a real terminal
  output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
}

function executeCommand(cmd) {
  if (commands[cmd]) {
    const result = commands[cmd];
    if (typeof result === "function") {
      print(result());
    } else if (cmd === "clear") {
      output.innerHTML = "";
    } else {
      print(result);
    }
  } else {
    print(`command not found: ${cmd}`);
    ai_help = ai_help + 1;
    if (ai_help > 2) {
      print("[SYSTEM] LOOK THE SYSTEM FEED FOR HELP'");
    }
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      print(`> ${command}`);
      executeCommand(command);
    }
    input.value = "";
  }
});



setInterval(() => {
  const line = document.createElement("div");
  if (ai_help > 2) {
    line.textContent = `[SYSTEM] You seem... impaired.\n [SYSTEM] suggesting: 'help'`;
    ai_help = 0;
  }
}, 3000);

function hi() {
  const hi = document.createElement('div');
  hi.className = 'cyber-greeting';
  hi.innerHTML = `
    <div class="greeting-content">
      <h1 class="glitch" data-text="GREETINGS">GREETINGS</h1>
      <div class="greeting-subtitle">
        <span class="scanline"></span>
        <h3>This is an interactive portfolio.</h3>
        <p>> User: ${navigator.userAgent.split(' ')[0]}</p>
        <p>> Type <span class="blink">help</span> to explore</p>
      </div>
    </div>
    <div class="greeting-close">✖</div>
  `;

  const histyle = document.createElement('style');
  histyle.textContent = `
    .cyber-greeting {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(10, 0, 20, 0.95);
      border: 1px solid #ff00c8;
      border-radius: 0;
      padding: 30px;
      z-index: 1000;
      width: 80%;
      max-width: 800px;
      box-shadow: 0 0 30px #ff00c8aa;
      font-family: monospace;
      animation: fadeIn 0.5s ease-out;
    }
    
    .greeting-content {
      position: relative;
      padding: 20px;
      border: 1px dashed #00f0ff44;
    }
    
    .glitch {
      position: relative;
      color: #ff00c8;
      font-size: 2.5rem;
      margin: 0 0 20px 0;
      text-shadow: 0 0 10px #ff00c8;
    }
    
    .glitch::before {
      content: attr(data-text);
      position: absolute;
      left: -2px;
      text-shadow: 2px 0 #00f0ff;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    .greeting-subtitle {
      color: #00f0ff;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .greeting-subtitle p {
      margin: 10px 0;
    }
    
    .scanline {
      display: block;
      height: 2px;
      background: linear-gradient(to right, #ff00c8, #00f0ff);
      margin-bottom: 20px;
      animation: scanline 2s linear infinite;
    }
    
    .blink {
      animation: blink 1s step-end infinite;
      color: #ff00c8;
    }
    
    .greeting-close {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ff00c8;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s;
    }
    
    .greeting-close:hover {
      color: #00f0ff;
      transform: scale(1.2);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -45%); }
      to { opacity: 1; transform: translate(-50%, -50%); }
    }
    
    @keyframes glitch-anim {
      0% { clip: rect(31px, 9999px, 94px, 0); }
      10% { clip: rect(112px, 9999px, 76px, 0); }
      20% { clip: rect(85px, 9999px, 77px, 0); }
      30% { clip: rect(27px, 9999px, 97px, 0); }
      40% { clip: rect(64px, 9999px, 98px, 0); }
      50% { clip: rect(61px, 9999px, 85px, 0); }
      60% { clip: rect(99px, 9999px, 114px, 0); }
      70% { clip: rect(34px, 9999px, 115px, 0); }
      80% { clip: rect(98px, 9999px, 129px, 0); }
      90% { clip: rect(43px, 9999px, 96px, 0); }
      to { clip: rect(82px, 9999px, 64px, 0); }
    }
    
    @keyframes scanline {
      0% { width: 0%; }
      100% { width: 100%; }
    }
    
    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  const container = document.createElement('div');
  container.appendChild(histyle);
  container.appendChild(hi);

  
  hi.querySelector('.greeting-close').addEventListener('click', () => {
    hi.style.animation = 'fadeOut 0.5s ease-out forwards';
    setTimeout(() => container.remove(), 500);
  });

  const fadeOutStyle = document.createElement('style');
  fadeOutStyle.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; transform: translate(-50%, -50%); }
      to { opacity: 0; transform: translate(-50%, -45%); }
    }
  `;
  container.appendChild(fadeOutStyle);

  return container;
}


document.addEventListener('DOMContentLoaded', () => {
  const greeting = hi();
  document.body.appendChild(greeting);
  

  setTimeout(() => {
    if (document.body.contains(greeting)) {
      greeting.querySelector('.greeting-close').click();
    }
  }, 10000);
});

const sidePanelBtn = document.getElementById("side-panel-button");
sidePanelBtn.addEventListener('click', function() {
  const mainContainer = document.getElementById("main-container");
  mainContainer.classList.toggle("side-panel-hidden");
  sidePanelBtn.classList.toggle("open");
});


  function appendToFeed(text) {
    const feed = document.getElementById("log-feed"); // feed'in id'si buyduysa
    if (feed) {
      const line = document.createElement("div");
      line.textContent = text;
      feed.appendChild(line);
    }
  }

  fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      const country = data.country_name || "Unknown Country";

      appendToFeed(`🌐 Location: ${country}`);
    })
    .catch(error => {
      appendToFeed(`❌ Location info failed.`);
    });

  window.addEventListener("load", () => {
    const time = performance.now().toFixed(2);
    appendToFeed(`⚡ Page loaded in ${time}ms`);
  });

  function getSimpleBrowser() {
  const ua = navigator.userAgent;

  if (ua.includes("Chrome") && !ua.includes("Edg/")) {
    return "Chrome";
  } else if (ua.includes("Firefox")) {
    return "Firefox";
  } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
    return "Safari";
  } else if (ua.includes("Edg/")) {
    return "Edge";
  } else {
    return "Unknown Browser";
  }
}

function getOS() {
  const ua = navigator.userAgent;

  if (ua.includes("Windows NT 10.0")) return "Windows 10";
  if (ua.includes("Windows NT 11.0")) return "Windows 11";
  if (ua.includes("Mac OS X")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone")) return "iOS";

  return "Unknown OS";
}
appendToFeed(`🧭 Browser: ${getSimpleBrowser()} (${getOS()})`);
