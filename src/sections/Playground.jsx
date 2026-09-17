/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import cvPdfUrl from "../../Moamen_Alaa_Software_Engineer_CV.pdf?url";

const STORAGE_KEY = "moamen-cv-latex-source";

const initialSource = String.raw`\documentclass[10pt,letterpaper]{article}
\usepackage[margin=0.55in,top=0.5in,bottom=0.5in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{xcolor}
\usepackage[T1]{fontenc}
\usepackage{helvet}

\definecolor{ink}{HTML}{1D1D1F}
\definecolor{muted}{HTML}{5F5F64}
\pagestyle{empty}
\setlength{\parindent}{0pt}
\hypersetup{colorlinks=true,urlcolor=blue}
\titleformat{\section}{\bfseries\normalsize\color{ink}}{}{0em}{}[\vspace{2pt}\hrule]
\titlespacing*{\section}{0pt}{9pt}{5pt}
\setlist[itemize]{leftmargin=14pt,itemsep=1pt,topsep=2pt}

\begin{document}
\begin{center}
  {\LARGE\textbf{MOAMEN ALAA MOSTAFA ATIA}}\\
  {\large Software Engineer}\\[2pt]
  Cairo, Egypt $\bullet$ +201004331573 $\bullet$ \href{mailto:moemenatia4@gmail.com}{moemenatia4@gmail.com}\\
  \href{https://www.linkedin.com/in/moamen-alaa-b5773821a/}{LinkedIn} $\bullet$ \href{https://github.com/moemen03}{GitHub} $\bullet$ \href{https://portfolio-sand-eight-80.vercel.app/}{Portfolio}
\end{center}

\section*{PROFESSIONAL SUMMARY}
Software Engineer with 2+ years of experience building responsive, scalable web and mobile applications using React,
Next.js, TypeScript, and Supabase. Combines hands-on full-stack development with 200+ students taught as a frontend
instructor and mentor. Currently pursuing a Master's in Software Engineering at GIU while leading the development of an
internal proctoring and scheduling platform for 77+ teaching assistants.

\section*{EDUCATION}
\textbf{M.Sc. in Software Engineering} \hfill Oct 2025--Oct 2027 (Expected)\\
\textit{German International University (GIU), Cairo}\\[3pt]
\textbf{B.Sc. in Computer Software Engineering} \hfill 2025\\
\textit{Egyptian Chinese University -- CGPA: 3.58 / 4.0}

\section*{PROFESSIONAL EXPERIENCE}
\textbf{Teaching Assistant -- German International University (GIU)} \hfill Oct 2025--Present\\
\textit{Onsite, Cairo}
\begin{itemize}
  \item Assist faculty in software engineering and Business Continuity \& Risk Management courses.
  \item Lead an internal proctoring system for scheduling, supervision, and attendance for 77+ teaching assistants.
  \item Conduct office hours and labs, supporting students with debugging and project work.
\end{itemize}

\textbf{Frontend Instructor -- Route Academy} \hfill Oct 2023--Oct 2025\\
\textit{Hybrid, Cairo -- Progressed from Mentor to Instructor}
\begin{itemize}
  \item Delivered hands-on frontend courses to 200+ students covering React.js, Next.js, JavaScript, CSS, and responsive design.
  \item Designed curriculum, exercises, and project briefs; mentored students through debugging and code reviews.
\end{itemize}

\textbf{Frontend React.js Intern -- Manifesto Business} \hfill May 2024--Aug 2024
\begin{itemize}
  \item Built responsive React interfaces from Figma and integrated RESTful APIs across multiple user flows.
  \item Collaborated with backend and design teams in an agile workflow to ship features end-to-end.
\end{itemize}

\textbf{Frontend Vue.js Intern -- Ensoulify} \hfill Sep 2024--Oct 2024
\begin{itemize}
  \item Implemented interactive Vue.js components and contributed to shipping frontend features.
\end{itemize}

\textbf{Founding Chairman -- ICPC-ECU Competitive Programming Community} \hfill 2022--2023
\begin{itemize}
  \item Founded and led the university community; organized contests, workshops, and algorithmic training sessions.
\end{itemize}

\newpage
\section*{FEATURED PROJECTS}
\textbf{TA Proctoring Management System} \hfill Next.js $\bullet$ TypeScript $\bullet$ Supabase
\begin{itemize}
  \item Internal platform for 77+ TAs coordinating exam assignments, schedules, and attendance.
  \item Designed a scheduling engine for availability, coverage, exam slots, and conflict detection.
\end{itemize}

\textbf{Rose Gifts -- E-commerce Platform} \hfill Next.js $\bullet$ NextAuth $\bullet$ React Query
\begin{itemize}
  \item Full-stack gifting platform with authentication, product catalog, cart, and checkout flow.
  \item Implemented optimistic updates and caching with React Query and shadcn/ui.
\end{itemize}

\textbf{Zoom Clone -- Real-time Video Conferencing} \hfill Next.js $\bullet$ Clerk $\bullet$ GetStream
\begin{itemize}
  \item Video conferencing app with scheduled meetings, instant rooms, recordings, and personal links.
\end{itemize}

\textbf{Interactive 3D Portfolio} \hfill React $\bullet$ Three.js $\bullet$ React Three Fiber
\begin{itemize}
  \item Personal portfolio with custom 3D scenes, interactive animations, and responsive layouts.
\end{itemize}

\section*{TECHNICAL SKILLS}
\textbf{Languages:} TypeScript, JavaScript (ES6+), HTML5, CSS3\\
\textbf{Frontend:} React.js, Next.js, Vue.js, React Native, Flutter, Tailwind CSS, SASS, Bootstrap, shadcn/ui\\
\textbf{State \& Data:} Redux, React Query, Context API, React Hook Form, Zod\\
\textbf{Backend \& Database:} Node.js, Express.js, Supabase, PostgreSQL, Auth, Realtime, REST APIs\\
\textbf{3D \& Real-time:} Three.js, React Three Fiber, WebSockets\\
\textbf{Testing \& Tools:} Jest, React Testing Library, Git, GitHub, Vercel

\section*{CERTIFICATIONS \& LANGUAGES}
\begin{itemize}
  \item Frontend Web Development Diploma -- Route Academy (2023)
  \item Problem Solving -- Coach Academy (2022)
  \item ECPC Qualifications (2023) $\bullet$ IEEEXtreme 16.0 Programming Competition (2023)
\end{itemize}
\textbf{Languages:} Arabic (native) $\bullet$ English (fluent)
\end{document}`;

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function renderLatexPreview(source) {
  const documentBody = source.split("\\begin{document}")[1]?.split("\\end{document}")[0] ?? source;
  let body = escapeHtml(documentBody.replace(/(^|[^\\])%.*$/gm, "$1"));

  body = body
    .replace(/\\begin\{center\}/g, '<div class="cv-center">')
    .replace(/\\end\{center\}/g, "</div>")
    .replace(/\\section\*?\{([^{}]+)\}/g, "<h2>$1</h2>")
    .replace(/\\textbf\{([^{}]+)\}/g, "<strong>$1</strong>")
    .replace(/\\textit\{([^{}]+)\}/g, "<em>$1</em>")
    .replace(/\\href\{([^{}]+)\}\{([^{}]+)\}/g, '<a href="$1" target="_blank">$2</a>')
    .replace(/\\begin\{itemize\}/g, "<ul>")
    .replace(/\\end\{itemize\}/g, "</ul>")
    .replace(/\\item\s*/g, "<li>")
    .replace(/(?=<li>|<\/ul>)/g, "</li>")
    .replace(/\\newpage/g, '<div class="page-break"></div>')
    .replace(/\\hfill/g, '<span class="cv-spacer"></span>')
    .replace(/\$\\bullet\$/g, '<span class="cv-bullet">•</span>')
    .replace(/\\&/g, "&amp;")
    .replace(/\\\\(?:\[[^\]]+\])?/g, "<br>")
    .replace(/\{\\LARGE\s*/g, '<span class="cv-name">')
    .replace(/\{\\large\s*/g, '<span class="cv-role">')
    .replace(/\\[a-zA-Z]+\*?(?:\[[^\]]*\])?/g, "")
    .replace(/[{}$]/g, "")
    .replace(/--/g, "—")
    .replace(/\n{2,}/g, '<div class="cv-gap"></div>')
    .replace(/\n/g, " ")
    .replace(/<span class="cv-name">([^<]+)<\/strong>/g, '<span class="cv-name"><strong>$1</strong></span>')
    .replace(/<span class="cv-role">([^<]+)<br>/g, '<span class="cv-role">$1</span><br>');

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{box-sizing:border-box} body{margin:0;background:#cfd0d5;color:#1d1d1f;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.35;padding:24px}
    .document{width:min(100%,760px);min-height:984px;margin:0 auto;padding:46px 56px;background:#fff;box-shadow:0 12px 35px rgba(0,0,0,.18)}
    .cv-center{text-align:center}.cv-name{display:block;font-size:24px;letter-spacing:.01em}.cv-role{font-size:14px;color:#555}.cv-gap{height:7px}
    h2{font-size:12px;margin:12px 0 6px;border-bottom:1px solid #222;padding-bottom:3px} strong{font-weight:700} em{color:#555} a{color:#075fc1;text-decoration:underline}
    ul{margin:3px 0 6px;padding-left:20px}li{padding-left:1px}.cv-spacer{display:inline-block;min-width:22px}.cv-bullet{padding:0 5px;color:#555}
    .page-break{height:72px;margin:36px -56px;background:#cfd0d5;border-top:1px solid #aaa;border-bottom:1px solid #aaa}
    @media(max-width:620px){body{padding:10px}.document{padding:30px 24px;font-size:10px}}
  </style></head><body><article class="document">${body}</article></body></html>`;
}

const IconButton = ({ label, children, onClick, disabled = false, active = false }) => (
  <button type="button" className={`playground-icon-button${active ? " is-active" : ""}`} aria-label={label} title={label} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default function Playground() {
  const [source, setSource] = useState(() => localStorage.getItem(STORAGE_KEY) || initialSource);
  const [appliedSource, setAppliedSource] = useState(source);
  const [status, setStatus] = useState("Ready");
  const [message, setMessage] = useState("Preview ready.");
  const [expanded, setExpanded] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [previewMode, setPreviewMode] = useState("live");
  const [copied, setCopied] = useState(false);
  const workspaceRef = useRef(null);
  const gutterRef = useRef(null);
  const compileTimer = useRef(null);

  const dirty = source !== appliedSource;
  const lineNumbers = useMemo(() => source.split("\n").map((_, index) => index + 1), [source]);
  const previewDocument = useMemo(() => renderLatexPreview(appliedSource), [appliedSource]);

  const applyChanges = useCallback(() => {
    if (!dirty || status === "Rendering") return;
    setStatus("Rendering");
    setMessage("Validating source and rendering document preview…");
    window.clearTimeout(compileTimer.current);
    compileTimer.current = window.setTimeout(() => {
      setAppliedSource(source);
      localStorage.setItem(STORAGE_KEY, source);
      setStatus("Ready");
      setMessage("Source validated. Preview updated.");
    }, 650);
  }, [dirty, source, status]);

  useEffect(() => {
    document.title = "CV LaTeX Playground | Moamen Alaa";
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        applyChanges();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(compileTimer.current);
    };
  }, [applyChanges]);

  const copySource = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setMessage("Clipboard access is unavailable. Select the source to copy it manually.");
    }
  };

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = cvPdfUrl;
    link.download = "Moamen_Alaa_Software_Engineer_CV.pdf";
    link.click();
  };

  const resetSource = () => {
    setSource(initialSource);
    setAppliedSource(initialSource);
    localStorage.removeItem(STORAGE_KEY);
    setMessage("Source reset to the portfolio version.");
    setStatus("Ready");
  };

  const enterFullscreen = async () => {
    if (!document.fullscreenElement) await workspaceRef.current?.requestFullscreen();
    else await document.exitFullscreen();
  };

  return (
    <main className="playground-page">
      <div className="playground-ambient" aria-hidden="true">
        <div className="playground-orb playground-orb-one" />
        <div className="playground-orb playground-orb-two" />
        <div className="playground-orbit playground-orbit-one" />
        <div className="playground-orbit playground-orbit-two" />
      </div>

      <header className="playground-nav">
        <a className="playground-brand" href="/" aria-label="Moamen Alaa home"><span>MA</span> Moamen Alaa</a>
        <nav aria-label="Playground navigation">
          <a href="/#home">Home</a><a href="/#projects">Projects</a><a href="/#contact">Contact</a><a className="active" href="/playground">Playground</a>
        </nav>
        <a className="playground-back-link" href="/">Back to portfolio <span>↗</span></a>
      </header>

      <section className="playground-shell">
        <div className="playground-heading-row">
          <div><p><span /> Interactive resume lab</p><h1>LaTeX <em>Playground</em></h1></div>
          <div className="playground-file-chip"><span>●</span> Moamen_Alaa_CV.tex</div>
        </div>

        <div ref={workspaceRef} className={`playground-window${expanded ? " is-expanded" : ""}${terminalOpen ? " terminal-is-open" : ""}`}>
          <div className="playground-window-bar">
            <div className="traffic-lights" aria-label="Layout controls">
              <button type="button" aria-label="Reset source" title="Reset source" onClick={resetSource} />
              <button type="button" aria-label="Toggle terminal" title="Toggle terminal" onClick={() => setTerminalOpen((value) => !value)} />
              <button type="button" aria-label="Toggle expanded view" title="Toggle expanded view" onClick={() => setExpanded((value) => !value)} />
            </div>
            <div className="playground-tab"><span>TX</span> Moamen_Alaa_CV.tex <i>{dirty ? "●" : "×"}</i></div>
            <div className="playground-window-actions">
              <IconButton label={expanded ? "Reset layout" : "Expand view"} active={expanded} onClick={() => setExpanded((value) => !value)}>↔</IconButton>
              <IconButton label="Enter fullscreen" onClick={enterFullscreen}>⛶</IconButton>
              <IconButton label={copied ? "Copied" : "Copy source"} onClick={copySource}>{copied ? "✓" : "⧉"}</IconButton>
              <IconButton label="Download CV PDF" onClick={downloadPdf}>
                <span className="download-glyph" aria-hidden="true" />
              </IconButton>
              <IconButton label="Reset source" disabled={!dirty && source === initialSource} onClick={resetSource}>↶</IconButton>
              <button type="button" className="playground-apply" onClick={applyChanges} disabled={!dirty || status === "Rendering"}>
                <span>{status === "Rendering" ? "◌" : "▶"}</span> {status === "Rendering" ? "Rendering" : "Apply changes"}
              </button>
            </div>
          </div>

          <div className="playground-workspace">
            {!expanded && (
              <aside className="playground-explorer">
                <div className="explorer-title"><span>Explorer</span><button type="button" onClick={resetSource} aria-label="Clear saved source">···</button></div>
                <strong>⌄ <span>PORTFOLIO</span></strong>
                <div className="explorer-folder">⌄ <span>Saved</span></div>
                <button className="explorer-file is-selected" type="button"><b>TX</b> Moamen_Alaa_CV.tex</button>
                <a className="explorer-file" href={cvPdfUrl} target="_blank" rel="noreferrer"><b>PDF</b> Original_CV.pdf</a>
              </aside>
            )}

            <section className="playground-editor" aria-label="LaTeX editor">
              <div className="editor-line-numbers" ref={gutterRef} aria-hidden="true">{lineNumbers.map((line) => <span key={line}>{line}</span>)}</div>
              <textarea
                aria-label="Editor content"
                value={source}
                onChange={(event) => setSource(event.target.value)}
                onScroll={(event) => { if (gutterRef.current) gutterRef.current.scrollTop = event.currentTarget.scrollTop; }}
                spellCheck="false"
              />
            </section>

            <section className="playground-preview" aria-label="Document preview">
              <div className="preview-toolbar">
                <div>
                  <button type="button" className={previewMode === "live" ? "active" : ""} onClick={() => setPreviewMode("live")}>Live preview</button>
                  <button type="button" className={previewMode === "pdf" ? "active" : ""} onClick={() => setPreviewMode("pdf")}>Original PDF</button>
                </div>
                <span>{previewMode === "live" ? "Browser render" : "2 pages"}</span>
              </div>
              {previewMode === "live" ? <iframe title="Live CV preview" srcDoc={previewDocument} /> : <iframe title="Original CV PDF" src={cvPdfUrl} />}
            </section>
          </div>

          {terminalOpen && !expanded && (
            <div className="playground-terminal">
              <div className="terminal-title"><span>▣</span> TERMINAL <button type="button" onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></div>
              <code><span className="terminal-prompt">$</span> cv-preview: apply<br /><span className={status === "Rendering" ? "terminal-warn" : "terminal-ok"}>{status === "Rendering" ? "◌" : "✓"}</span> {message}<br /><span className="terminal-status">Status: {status}</span></code>
            </div>
          )}
        </div>

        <div className="playground-hints">
          <span><kbd>⌘</kbd><kbd>S</kbd> Apply changes</span><span>Your saved source stays on this device.</span><a href={cvPdfUrl} target="_blank" rel="noreferrer">Open original CV ↗</a>
        </div>
      </section>
    </main>
  );
}
