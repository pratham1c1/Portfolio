/**
 * learningMap.js
 * Interactive Learning Map with Persistent History and Multi-branch Navigation.
 */

(function () {
  "use strict";

  // -- CONFIG --
  const CONFIG = {
    sectionId: "learning-map", 
    canvasId: "lm-canvas",
    colors: {
      visited: "#94a3b8", // Slate Grey for explored nodes
      visitedText: "#ffffff",
      activeText: "#ffffff",
      untouched: "#f8fafc",
      inactiveLine: "#f1f5f9",
      pathLine: "#cbd5e1"
    }
  };

  // -- DATA --
  const DATA = {
  id: "root",
  name: "Prathamesh",
  desc: "That's me",
  color: "#4f46e5",
  children: [

    // ───────────────────────── JAVA ─────────────────────────
    {
      id: "java",
      name: "Java & JVM",
      color: "#f59e0b",
      desc: "Core language, concurrency, and JVM fundamentals",
      children: [
        { id: "core", name: "Core Java", color: "#f59e0b",
          desc: "OOP, Collections, Generics, exception handling, memory model" },

        { id: "streams", name: "Streams & Lambda", color: "#f59e0b",
          desc: "Functional programming with pipelines and collectors" },

        { id: "mt", name: "Multithreading", color: "#f59e0b",
          desc: "Concurrency, thread pools, synchronization, CompletableFuture" },

        { id: "jvm", name: "JVM Internals", color: "#f59e0b",
          desc: "Heap, stack, GC basics, class loading lifecycle" },

        { id: "txn", name: "Transaction Management", color: "#f59e0b",
          desc: "ACID properties, isolation levels, Spring @Transactional" }
      ],
    },

    // ───────────────────────── SPRING ─────────────────────────
    {
      id: "spring",
      name: "Spring Ecosystem",
      color: "#10b981",
      desc: "Enterprise backend development framework",
      children: [
        { id: "boot", name: "Spring Boot", color: "#10b981",
          desc: "Auto-configuration, REST APIs, production-ready services" },

        { id: "sec", name: "Spring Security", color: "#10b981",
          desc: "Authentication, JWT-based authorization, filter chains" },

        { id: "jpa", name: "JPA / Hibernate", color: "#10b981",
          desc: "ORM mapping, lazy loading, N+1 problem handling" },

        { id: "validation", name: "Validation & Exception Handling", color: "#10b981",
          desc: "Global exception handling and request validation" }
      ],
    },

    // ───────────────────────── SYSTEM DESIGN ─────────────────────────
    {
      id: "arch",
      name: "System Design",
      color: "#8b5cf6",
      desc: "Scalable and distributed system architecture",
      children: [
        { id: "micro", name: "Microservices", color: "#8b5cf6",
          desc: "Service decomposition, API contracts, inter-service communication" },

        { id: "api", name: "REST API Design", color: "#8b5cf6",
          desc: "Stateless services, versioning, error handling standards" },

        { id: "patterns", name: "Design Patterns", color: "#8b5cf6",
          desc: "SOLID principles, GoF patterns, clean architecture" },

        { id: "resilience", name: "Resilience", color: "#8b5cf6",
          desc: "Circuit breaker, retries, fault tolerance strategies" }
      ],
    },

    // ───────────────────────── DATA & MESSAGING ─────────────────────────
    {
      id: "data",
      name: "Data & Messaging",
      color: "#3b82f6",
      desc: "High-volume data processing and persistence",
      children: [
        { id: "sql", name: "Oracle SQL", color: "#3b82f6",
          desc: "Query optimization, indexing, execution plans, joins" },

        { id: "dbdesign", name: "Database Design", color: "#3b82f6",
          desc: "Schema design, normalization, indexing strategies" },

        { id: "kafka", name: "Apache Kafka", color: "#3b82f6",
          desc: "Event-driven communication, partitions, consumer groups" },

        { id: "nosql", name: "MongoDB / Redis", color: "#3b82f6",
          desc: "Document storage and caching mechanisms" }
      ],
    },

    // ───────────────────────── DEVOPS ─────────────────────────
    {
      id: "devops",
      name: "DevOps & Deployment",
      color: "#ec4899",
      desc: "CI/CD and containerized deployments",
      children: [
        { id: "docker", name: "Docker", color: "#ec4899",
          desc: "Containerization, Dockerfiles, multi-stage builds" },

        { id: "k8s", name: "Kubernetes", color: "#ec4899",
          desc: "Pod orchestration, services, deployment strategies" },

        { id: "cicd", name: "CI/CD Pipelines", color: "#ec4899",
          desc: "GitHub Actions, Jenkins, automated builds and quality gates" },

        { id: "sonar", name: "Code Quality", color: "#ec4899",
          desc: "Static analysis with SonarCloud and test coverage enforcement" }
      ],
    },

    // ───────────────────────── TESTING ─────────────────────────
    {
      id: "testing",
      name: "Testing",
      color: "#14b8a6",
      desc: "Unit and integration testing practices",
      children: [
        { id: "junit", name: "JUnit 5", color: "#14b8a6",
          desc: "Unit testing with assertions and lifecycle management" },

        { id: "mockito", name: "Mockito", color: "#14b8a6",
          desc: "Mocking dependencies and verifying interactions" },

        { id: "apiTest", name: "API Testing", color: "#14b8a6",
          desc: "Postman-based endpoint validation and testing workflows" }
      ],
    },

    // ───────────────────────── FRONTEND ─────────────────────────
    {
      id: "frontend", name: "Frontend", color: "#f97316",
      desc: "Frontend technologies used for portfolio and project interfaces",
      children: [
        { id: "react", name: "React", color: "#f97316", desc: "Component-based UI development" },
        { id: "javascript", name: "JavaScript", color: "#f97316", desc: "Modern JavaScript and browser APIs" },
        { id: "web", name: "HTML & CSS", color: "#f97316", desc: "Responsive layouts, styling and accessible interfaces" }
      ]
    },

    // ───────────────────────── AI / GENAI ─────────────────────────
    {
      id: "ai", name: "AI & GenAI", color: "#a855f7",
      desc: "Retrieval-augmented generation and LLM application development",
      children: [
        { id: "rag", name: "RAG", color: "#a855f7", desc: "Retrieval-augmented generation pipelines" },
        { id: "springai", name: "Spring AI", color: "#a855f7", desc: "Integrating language models into Java applications" },
        { id: "ollama", name: "Ollama & LLMs", color: "#a855f7", desc: "Local model experimentation and prompt engineering" },
        { id: "vector", name: "Vector Databases", color: "#a855f7", desc: "Embeddings, semantic search and pgvector" }
      ]
    },

    // ───────────────────────── LANGUAGES & TOOLS ─────────────────────────
    {
      id: "tools", name: "Languages & Tools", color: "#eab308",
      desc: "Programming languages, developer tools and engineering practices",
      children: [
        { id: "python", name: "Python", color: "#eab308", desc: "Scripting and development utilities" },
        { id: "cpp", name: "C++", color: "#eab308", desc: "Programming fundamentals and problem solving" },
        { id: "git", name: "Git & GitHub", color: "#eab308", desc: "Version control and collaborative workflows" },
        { id: "postman", name: "Postman & Swagger", color: "#eab308", desc: "API exploration, testing and documentation" },
        { id: "oci", name: "OCI", color: "#eab308", desc: "Oracle Cloud Infrastructure" }
      ]
    }

  ],
};


  // -- STYLES --
  const style = document.createElement('style');
  style.textContent = `
    #${CONFIG.sectionId} {
      position: relative; width: 100%; height: 590px;
      background: radial-gradient(ellipse at 50% 50%, #191637 0, #111126 60%, #0c0d1d 100%); overflow: hidden; font-family: 'Manrope', sans-serif;
      isolation: isolate;
    }
    #${CONFIG.canvasId} { display:block; width:100%; height:100%; cursor:default; }
    #${CONFIG.sectionId}::before { content:""; position:absolute; inset:0; pointer-events:none; z-index:0; opacity:.25; background-image:radial-gradient(#8b83ff 0.7px,transparent 0.7px); background-size:31px 31px; mask-image:radial-gradient(ellipse at center,#000,transparent 78%); }
    #${CONFIG.sectionId}::after { content:""; position:absolute; inset:-30%; pointer-events:none; z-index:0; background:conic-gradient(from 0deg at 50% 50%,transparent 0deg,rgba(92,106,255,.05) 38deg,transparent 78deg,rgba(28,220,255,.045) 145deg,transparent 210deg); animation:lm-energy-drift 24s linear infinite; }
    @keyframes lm-energy-drift { to { transform:rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) { #${CONFIG.sectionId}::after { animation:none; } }
    .lm-ui { position: absolute; pointer-events: none; z-index: 10; width: 100%; height: 100%; top: 0; left: 0; }
    #${CONFIG.canvasId} { position:relative; z-index:1; }
    .lm-ui { z-index:2; }
    
    /* Redesigned Circular Reset Button */
    .lm-btn { 
      position: absolute; top: 50%; left: 20px; transform: translateY(-50%);
      pointer-events: auto; background: #201c3c; color: #c4b5fd; border: 1px solid rgba(167,139,250,.35); 
      width: 48px; height: 48px; border-radius: 50%;
      cursor: pointer; display: none; align-items: center; justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .lm-btn:hover { background: #30265d; transform: translateY(-50%) scale(1.1) rotate(-90deg); }
    .lm-btn.lm-visible { display: flex; }

    .lm-tooltip {
      position: absolute;
      bottom: 50%; 
      left: 82%; 
      z-index: 10;
      background: rgba(10,8,28,.94); border: 1px solid rgba(167,139,250,.25); padding: 16px; border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.35); width: 240px; backdrop-filter: blur(14px);
      opacity: 0; transform: translateY(10px); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); pointer-events: none;
    }
    .lm-tooltip.lm-visible { opacity: 1; transform: translateY(0);}
    .lm-tt-name { font-weight: 800; color: #e2e8f0; margin-bottom: 4px; display: block; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;}
    .lm-tt-desc { font-size: 12px; color: #94a3b8; line-height: 1.5; }
    @media (max-width: 760px) { #learning-map { height: 480px; } .lm-tooltip { left: 50% !important; bottom: 14% !important; width: min(230px, 72%) !important; transform: translate(-50%, 10px); } .lm-tooltip.lm-visible { transform: translate(-50%, 0); } }
  `;
  document.head.appendChild(style);

  // -- STATE --
  let canvas, ctx, W, H;
  let nodeMap = {}, focusStack = []; 
  const cam = { x: 0, y: 0, scale: 1, tx: 0, ty: 0, ts: 0.7 }; 
  let hoveredId = null;
  let animationFrame = 0;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const energyParticles = [];
  const ambientParticles = Array.from({ length: 64 }, (_, i) => ({
    x: ((i * 137.508) % 997) / 997,
    y: ((i * 73.31) % 991) / 991,
    size: 0.5 + (i % 4) * 0.32,
    phase: i * 0.71,
    speed: 0.25 + (i % 5) * 0.09
  }));

  function init() {
    const section = document.getElementById(CONFIG.sectionId);
    if (!section) return;
    
    section.innerHTML = `
      <canvas id="${CONFIG.canvasId}"></canvas>
      <div class="lm-ui">
        <button id="lm-back" class="lm-btn" title="Reset Map" style="top:50%">↺</button>
        <div id="lm-tooltip" class="lm-tooltip" style="
    bottom: 60%;
    left: 82%;
    width: 270px;
">
          <span id="lm-tt-name" class="lm-tt-name"></span>
          <span id="lm-tt-desc" class="lm-tt-desc"></span>
        </div>
      </div>
    `;

    canvas = document.getElementById(CONFIG.canvasId);
    ctx = canvas.getContext("2d");
    resize();
    buildLayout(DATA, 0, 0, 0);
    resetCamera();
    applyVisibility();

    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Interactive skills mind map. Hover or tap a node to inspect it, and click a category to explore its skills.');
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("resize", onResize);
    document.getElementById("lm-back").addEventListener("click", () => {
        focusStack = [];
        resetCamera();
        applyVisibility();
        document.getElementById("lm-back").classList.remove("lm-visible");
    });

    renderLoop();
  }

  function buildLayout(data, wx, wy, depth) {
    const meta = {
      data, wx, wy, depth,
      r: depth === 0 ? 55 : (depth === 1 ? 45 : 35),
      alpha: 1, 
      children: [], parentId: null
    };
    nodeMap[data.id] = meta;
    const kids = data.children || [];
    const dist = depth === 0 ? 240 : 160;
    kids.forEach((child, i) => {
      const a = (i / kids.length) * Math.PI * 2 + (depth * 0.4);
      const childMeta = buildLayout(child, wx + Math.cos(a) * dist, wy + Math.sin(a) * dist, depth + 1);
      childMeta.parentId = data.id;
      meta.children.push(childMeta);
    });
    return meta;
  }

  function applyVisibility() {
    const focusId = focusStack[focusStack.length - 1];
    Object.keys(nodeMap).forEach(id => {
      const m = nodeMap[id];
      if (!focusId) {
        // No focus: Root and its children are fully visible
        m.alpha = m.depth <= 1 ? 1 : 0.15;
      } else {
        const isFocus = id === focusId;
        const isAncestor = focusStack.includes(id);
        const isChildOfFocus = m.parentId === focusId;
        
        const isVisitedLevel = focusStack.some(stackId => {
            const stackNode = nodeMap[stackId];
            return m.parentId === stackNode.parentId && m.parentId !== null;
        });

        if (isFocus || isAncestor || isChildOfFocus || isVisitedLevel || m.depth === 0) {
            m.alpha = 1;
        } else {
            m.alpha = 0.15;
        }
      }
    });
  }

  function renderLoop(now = 0) {
    cam.x += (cam.tx - cam.x) * 0.1;
    cam.y += (cam.ty - cam.y) * 0.1;
    cam.scale += (cam.ts - cam.scale) * 0.1;
    const t = prefersReducedMotion ? 0 : now * 0.001;

    ctx.clearRect(0, 0, W, H);
    // Quiet ambient particles give the map depth without competing with labels.
    ambientParticles.forEach((p) => {
      const x = p.x * W + (prefersReducedMotion ? 0 : Math.sin(t * p.speed + p.phase) * 8);
      const y = p.y * H + (prefersReducedMotion ? 0 : Math.cos(t * p.speed * .7 + p.phase) * 7);
      const alpha = .14 + (prefersReducedMotion ? .04 : (Math.sin(t * 1.4 + p.phase) + 1) * .12);
      ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(160, 177, 255, ${alpha})`; ctx.fill();
    });

    const focusId = focusStack[focusStack.length - 1];

    // Connections: soft neon cable, moving electric pulse, and a traveling spark.
    Object.values(nodeMap).forEach(m => {
      if (!m.parentId) return;
      const p = nodeMap[m.parentId];
      const [sx, sy] = toScreen(p.wx, p.wy);
      const [ex, ey] = toScreen(m.wx, m.wy);
      const isVisitedPath = focusStack.includes(m.parentId) && focusStack.includes(m.data.id);
      const isActivePath = m.parentId === focusId || (focusStack.length === 0 && m.depth === 1);
      const color = isVisitedPath ? '#a5b4fc' : (isActivePath ? m.data.color : '#64748b');
      const alpha = Math.max(.08, m.alpha * (isActivePath ? .95 : .38));

      ctx.save(); ctx.globalAlpha = alpha;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey);
      ctx.strokeStyle = color; ctx.lineWidth = isActivePath ? 1.8 : (isVisitedPath ? 1.4 : .8);
      ctx.shadowBlur = isActivePath && !prefersReducedMotion ? 9 : 0; ctx.shadowColor = color; ctx.stroke();
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion && (isActivePath || isVisitedPath)) {
        const progress = ((t * (isActivePath ? .42 : .24) + (m.depth * .137) + (Object.keys(nodeMap).indexOf(m.data.id) * .031)) % 1);
        const px = sx + (ex - sx) * progress;
        const py = sy + (ey - sy) * progress;
        // Electric core and a small cross flare.
        ctx.globalAlpha = .9;
        ctx.beginPath(); ctx.arc(px, py, isActivePath ? 2.6 : 1.7, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff'; ctx.shadowBlur = 13; ctx.shadowColor = color; ctx.fill();
        ctx.beginPath(); ctx.moveTo(px - 5, py); ctx.lineTo(px + 5, py);
        ctx.moveTo(px, py - 5); ctx.lineTo(px, py + 5);
        ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.stroke();
      }
      ctx.restore();
    });

    // Nodes: breathing energy rings, gradient cores, and crisp labels.
    Object.values(nodeMap).sort((a,b) => a.depth - b.depth).forEach(m => {
      const [sx, sy] = toScreen(m.wx, m.wy);
      const r = m.r * cam.scale;
      const isFocus = m.data.id === focusId;
      const isVisited = !isFocus && (
        focusStack.includes(m.data.id) ||
        (focusStack.some(stackId => nodeMap[stackId].parentId === m.parentId) && m.parentId !== null) ||
        (m.depth === 0 && focusStack.length > 0)
      );
      const isActive = (m.parentId === focusId) || (focusStack.length === 0 && m.depth <= 1);
      const color = m.data.color || '#818cf8';
      const pulse = prefersReducedMotion ? 0 : (Math.sin(t * 2.1 + m.depth * .8 + m.wx * .003) + 1) / 2;

      ctx.save(); ctx.translate(sx, sy); ctx.globalAlpha = m.alpha;
      if (isFocus || isActive) {
        ctx.beginPath(); ctx.arc(0, 0, r + 5 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = color; ctx.globalAlpha = m.alpha * (.15 + pulse * .18); ctx.lineWidth = 1;
        ctx.shadowBlur = 12; ctx.shadowColor = color; ctx.stroke(); ctx.globalAlpha = m.alpha;
      }
      // Outer halo and soft radial core.
      if (isFocus || isActive || m.depth === 0) {
        ctx.shadowBlur = 18 + pulse * 10; ctx.shadowColor = color;
      }
      const gradient = ctx.createRadialGradient(-r * .28, -r * .32, Math.max(1, r * .08), 0, 0, r * 1.15);
      if (isVisited) { gradient.addColorStop(0, '#64748b'); gradient.addColorStop(1, '#263248'); }
      else if (isFocus || isActive) { gradient.addColorStop(0, color); gradient.addColorStop(1, '#111827'); }
      else { gradient.addColorStop(0, '#334155'); gradient.addColorStop(1, '#111827'); }
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fillStyle = gradient; ctx.fill();
      ctx.shadowBlur = 0; ctx.strokeStyle = (isFocus || isActive) ? color : 'rgba(148,163,184,.55)';
      ctx.lineWidth = isFocus ? 2.2 : 1; ctx.stroke();

      ctx.fillStyle = (isVisited || isFocus || isActive) ? '#ffffff' : '#b8c3d8';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const fontSize = Math.max(8, Math.min(13, r * .28));
      ctx.font = `bold ${fontSize}px Manrope, sans-serif`;
      const words = m.data.name.split(' ');
      if (words.length > 1 && r > 25) {
        ctx.fillText(words[0], 0, -fontSize / 1.8);
        ctx.fillText(words.slice(1).join(' '), 0, fontSize / 1.8);
      } else {
        const label = m.data.name.length > 16 ? m.data.name.slice(0, 14) + '…' : m.data.name;
        ctx.fillText(label, 0, 0);
      }
      ctx.restore();
    });

    animationFrame = requestAnimationFrame(renderLoop);
  }

  function toScreen(wx, wy) {
    return [(wx - cam.x) * cam.scale + W / 2, (wy - cam.y) * cam.scale + H / 2];
  }

  function resetCamera() { cam.tx = 0; cam.ty = 0; cam.ts = 0.7; }
  function zoomTo(m) { cam.tx = m.wx; cam.ty = m.wy; cam.ts = 1.0; }

  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    
    const found = Object.values(nodeMap).find(m => {
      const [sx, sy] = toScreen(m.wx, m.wy);
      const isInteractive = m.alpha > 0.3 || focusStack.includes(m.data.id) || m.depth === 0;
      return Math.hypot(x - sx, y - sy) < m.r * cam.scale && isInteractive;
    });
    
    hoveredId = found ? found.data.id : null;
    canvas.style.cursor = found ? "pointer" : "default";

    const tt = document.getElementById("lm-tooltip");
    if (found) {
      document.getElementById("lm-tt-name").textContent = found.data.name;
      document.getElementById("lm-tt-desc").textContent = found.data.desc || "Interactive node";
      tt.classList.add("lm-visible");
    } else {
      tt.classList.remove("lm-visible");
    }
  }

  function onTouchStart(e) {
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left, y = touch.clientY - rect.top;
    const found = Object.values(nodeMap).find(m => {
      const [sx, sy] = toScreen(m.wx, m.wy);
      return Math.hypot(x - sx, y - sy) < m.r * cam.scale && (m.alpha > .3 || m.depth === 0);
    });
    if (found) {
      hoveredId = found.data.id;
      document.getElementById("lm-tt-name").textContent = found.data.name;
      document.getElementById("lm-tt-desc").textContent = found.data.desc || "Interactive node";
      document.getElementById("lm-tooltip").classList.add("lm-visible");
    }
  }

  function onClick() {
    if (!hoveredId) return;
    const m = nodeMap[hoveredId];

    // CLICK ROOT: Reset everything
    if (m.depth === 0) {
        focusStack = [];
        resetCamera();
        applyVisibility();
        document.getElementById("lm-back").classList.remove("lm-visible");
        return;
    }

    if (focusStack.includes(hoveredId)) {
        const index = focusStack.indexOf(hoveredId);
        focusStack = focusStack.slice(0, index + 1);
    } else {
        const ancestorSiblingIndex = focusStack.findIndex(stackId => nodeMap[stackId].parentId === m.parentId);
        
        if (ancestorSiblingIndex !== -1) {
            focusStack = focusStack.slice(0, ancestorSiblingIndex);
            if (m.children.length > 0) focusStack.push(hoveredId);
        } else if (focusStack.length === 0 || m.parentId === focusStack[focusStack.length - 1]) {
            if (m.children.length > 0) focusStack.push(hoveredId);
        } else if (m.depth === 1) {
            focusStack = [hoveredId];
        }
    }

    zoomTo(m);
    applyVisibility();
    
    if (focusStack.length > 0) {
        document.getElementById("lm-back").classList.add("lm-visible");
    } else {
        document.getElementById("lm-back").classList.remove("lm-visible");
    }
  }

  function onResize() { resize(); resetCamera(); }
  function resize() {
    const s = document.getElementById(CONFIG.sectionId);
    if (!s) return;
    W = canvas.width = s.clientWidth;
    H = canvas.height = s.clientHeight;
  }

  init();
})();