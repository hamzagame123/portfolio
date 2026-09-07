import main from "./assets/cd6b5bfc39fc369b349f1604a7d6dbe3e73cfb7a.png";
import settings from "./assets/7776b2e3d5c09fa5c797f97d8effe7a1e48169c1.png";
import web from "./assets/8581fc19e4d378cabcb3f1ebd14ab4d2dd2fe929.png";
import "./case-study.css";

const inBuild = /\/build\/?(?:index.html)?$/.test(window.location.pathname);
const root = inBuild ? "../../" : "../";
const demo = inBuild ? "../smartrenamer-web/dist/" : "./smartrenamer-web/dist/";
function Artifact({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="artifact">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full-size image: ${alt}`}
      >
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>
        {caption} <span>Open image to inspect.</span>
      </figcaption>
    </figure>
  );
}
export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to case study
      </a>
      <header className="site-header">
        <a className="identity" href={root}>
          Hamza Galbete<span>Interaction designer</span>
        </a>
        <nav aria-label="Portfolio">
          <a href={`${root}#work`}>Work</a>
          <a href={`${root}#about`}>About</a>
          <a href={`${root}hamza_resume_remake_v2%20(AutoRecovered).pdf`}>
            Resume
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="intro wrap" id="overview">
          <div className="project-name">
            Smart Image Renamer <span>Self-directed project</span>
          </div>
          <div className="intro-grid">
            <h1>
              Giving an AI suggestion
              <br className="desktop-break" /> a review step.
            </h1>
            <p className="lead">
              I turned a repetitive file-renaming task into a workflow for
              checking suggestions, choosing what changes, and keeping track of
              the result.
            </p>
          </div>
          <dl className="facts">
            <div>
              <dt>My contribution</dt>
              <dd>
                Workflow, interface design <br />
                and AI-assisted implementation
              </dd>
            </div>
            <div>
              <dt>What exists</dt>
              <dd>
                Desktop prototype, later interface <br />
                exploration, browser adaptation
              </dd>
            </div>
            <div>
              <dt>Project context</dt>
              <dd>
                Personal tool, developed through <br />
                multiple iterations in 2025
              </dd>
            </div>
            <div>
              <dt>Validation</dt>
              <dd>
                Prototype evidence; <br />
                user testing still to do
              </dd>
            </div>
          </dl>
          <figure className="hero-art">
            <a
              href={main}
              target="_blank"
              rel="noreferrer"
              aria-label="Inspect full-size desktop interface"
            >
              <img
                src={main}
                alt="Desktop interface exploration with history, original and proposed filenames, image preview, queue, Preview Mode and a disabled Apply Changes button"
                fetchPriority="high"
              />
            </a>
            <figcaption>
              <strong>The review model.</strong> Existing interface exploration,
              shown as design evidence. Placeholder images and sample entries
              are part of the artifact, not a recorded user session.
            </figcaption>
          </figure>
        </section>
        <div className="reading-nav">
          <nav className="wrap" aria-label="Case study sections">
            <a href="#starting-point">Starting point</a>
            <a href="#decisions">Design decisions</a>
            <a href="#web">Browser version</a>
            <a href="#reflection">Reflection</a>
          </nav>
        </div>
        <section className="chapter wrap" id="starting-point">
          <div className="section-heading">
            <span>The starting point</span>
            <h2>A useful name was only the first problem.</h2>
          </div>
          <div className="prose">
            <p>
              My images had filenames that told me very little. Opening each
              one, deciding what to call it, and renaming it was repetitive. The
              first question was practical: could an image model suggest a
              useful name?
            </p>
            <p>
              That led to a harder interaction question. A plausible description
              can still be wrong. Before a suggestion touches a real file, I
              wanted a way to inspect it and decide what should happen.
            </p>
            <div className="question">
              How can AI act on my files while keeping me in control?
            </div>
          </div>
          <div className="timeline">
            <article>
              <span>March 2025 · earliest known stage</span>
              <h3>Make renaming possible</h3>
              <p>
                Recovered material points to a functional Python tool. The exact
                original UI source and creation conversation were not recovered.
              </p>
            </article>
            <article>
              <span>September 2025 · preserved source</span>
              <h3>Make the decision visible</h3>
              <p>
                A later interface snapshot contains preview, approval, history,
                and naming controls. The interface was already supplied in full
                before the recorded Codex repair session.
              </p>
            </article>
            <article>
              <span>Later iteration · web artifact</span>
              <h3>Adapt the outcome to a browser</h3>
              <p>
                The browser version uses Gemini for image analysis and downloads
                renamed copies. It does not edit the originals in place.
              </p>
            </article>
          </div>
          <details className="evidence-note">
            <summary>How I reconstructed this history</summary>
            <p>
              This account draws on recovered project files, editor history, and
              existing interface captures. The September artifact is a later
              Next.js interface, not proof of the March implementation. The
              rationale here is my retrospective reading of those decisions; it
              is not a recovered quote or a user research finding. The original
              coding model is unknown.
            </p>
          </details>
        </section>
        <section className="decisions wrap" id="decisions">
          <div className="section-heading">
            <span>The workflow I shaped</span>
            <h2>
              Make the answer inspectable. <br />
              Then make it actionable.
            </h2>
          </div>
          <ol className="flow">
            <li>Select files</li>
            <li>Generate proposals</li>
            <li>Inspect image + name</li>
            <li>Accept or regenerate</li>
            <li>Apply changes</li>
            <li>Retain history / undo</li>
          </ol>
          <p className="flow-caption">
            Interaction model in the recovered interface. This is a designed
            sequence, not evidence of successful usability testing.
          </p>
          <article className="decision">
            <div>
              <span className="decision-label">Review before action</span>
              <h3>A suggestion is not permission.</h3>
              <p>
                I separated generating a name from applying it. Preview Mode and
                a distinct Apply Changes action give the proposal its own state,
                where a person can inspect it before committing.
              </p>
              <p className="tradeoff">
                <strong>The tradeoff:</strong> Review adds effort. I still need
                to test when checking every suggestion helps and when it becomes
                repetitive.
              </p>
            </div>
            <figure className="detail-art">
              <div className="toolbar-crop">
                <img
                  src={main}
                  alt="Toolbar detail: Preview Mode sits before the disabled Apply Changes action"
                  loading="lazy"
                />
              </div>
              <figcaption>
                Existing toolbar detail: preview and application remain separate
                actions.
              </figcaption>
            </figure>
          </article>
          <article className="decision">
            <div>
              <span className="decision-label">Context and recovery</span>
              <h3>Keep the old name in sight.</h3>
              <p>
                I put the original and proposed names together, beside an image
                preview. That lets someone judge the description against the
                image and see exactly what would change.
              </p>
              <p>
                Searchable history and Undo / Redo controls make recovery part
                of the interface. Their presence shows the intended recovery
                model; it does not prove that people can recover without help.
              </p>
            </div>
            <figure className="detail-art">
              <div className="history-crop">
                <img
                  src={main}
                  alt="History detail showing original filenames alongside proposed names, tags and timestamps"
                  loading="lazy"
                />
              </div>
              <figcaption>
                Existing history detail. Sample records preserve the
                before-and-after state.
              </figcaption>
            </figure>
          </article>
          <article className="decision settings-decision">
            <div>
              <span className="decision-label">
                Useful defaults, adjustable rules
              </span>
              <h3>Fit the way a person already files things.</h3>
              <p>
                A useful description and a useful filename are different
                decisions. I separated naming meaning from separator, casing,
                tags, and custom instructions.
              </p>
              <p>
                The “skip files with normal names” option also asks where AI is
                unnecessary. The prototype uses a heuristic to identify
                unhelpful names; its reliability has not been validated.
              </p>
              <p className="tradeoff">
                <strong>The tradeoff:</strong> Settings keep the main task
                focused, but useful controls can become harder to discover.
                Watched folders remain an explored direction.
              </p>
            </div>
            <Artifact
              src={settings}
              alt="Settings exploration with skip normal names, watched folders, casing, separator and custom instructions"
              caption="Existing settings exploration. Visible controls demonstrate design intent, not implementation or validation of every feature."
            />
          </article>
        </section>
        <section className="web-section" id="web">
          <div className="wrap">
            <div className="chapter">
              <div className="section-heading">
                <span>The browser adaptation</span>
                <h2>
                  The same task. <br />A different file outcome.
                </h2>
              </div>
              <div className="prose">
                <p>
                  The web version uses Gemini to interpret images and suggest
                  names. In this version, the final action downloads a renamed
                  copy while preserving the original.
                </p>
                <p>
                  That changes what the interface needs to explain: where the
                  new file goes, whether the original changed, and what “done”
                  means.
                </p>
                <a className="button" href={demo}>
                  Explore the browser prototype{" "}
                  <span aria-hidden="true">↗</span>
                </a>
                <p className="small">
                  Image generation depends on the demo’s AI service being
                  available. The screenshot below documents its interface.
                </p>
              </div>
            </div>
            <Artifact
              src={web}
              alt="Browser prototype empty state with history on the left, image preview in the centre, and file queue on the right"
              caption="Browser adaptation: history, preview and queue remain visible. This capture shows the empty state."
            />
            <div className="outcomes">
              <div>
                <h3>Desktop direction</h3>
                <p>
                  Review a proposed change to a file. Preserve its previous name
                  and offer reversal.
                </p>
              </div>
              <div>
                <h3>Browser implementation</h3>
                <p>
                  Download a renamed copy. Make the destination and unchanged
                  original clear.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="chapter wrap reflection" id="reflection">
          <div className="section-heading">
            <span>What I took from it</span>
            <h2>The interface grew out of doing the task.</h2>
          </div>
          <div className="prose">
            <p>
              I started with the possibility of generating a filename. Working
              through the task made me think about the decisions around that
              output: what to show, when to ask, what to preserve, and how to
              recover.
            </p>
            <p>
              The difficult design problem was making an answer inspectable,
              controllable, and useful within someone’s existing habits. Those
              small decisions became the product.
            </p>
            <h3>What I would test next</h3>
            <ul>
              <li>Can someone spot and correct an inaccurate suggestion?</li>
              <li>Can they find and reverse an unwanted change?</li>
              <li>Do they understand where the browser’s copy went?</li>
              <li>
                Is this better for their task than thumbnails or existing
                search?
              </li>
            </ul>
            <p className="small">
              No validated accuracy, time-saving, batch-performance, or
              usability metrics are claimed. The outcome so far is a set of
              working and exploratory artifacts.
            </p>
          </div>
        </section>
        <footer className="wrap footer">
          <div>
            <p>Designed and built by Hamza Galbete</p>
            <span>
              Interaction Design graduate, interested in turning awkward
              workflows into usable tools.
            </span>
          </div>
          <a href={`${root}Locavore/case-study.html`}>
            Next case study: Locavore <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </main>
    </>
  );
}
