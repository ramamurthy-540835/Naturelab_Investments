const projects = {
  climate: {
    kicker: 'RESEARCH INTELLIGENCE', status: 'SOURCE-REPORTED · LIVE LISTING', title: 'Climate AI',
    desc: 'A climate evidence workspace concept for finding, screening and tracing research signals across hazards, impacts and adaptation.',
    lens: 'Validate source coverage, review ownership, deployment scope and evidence quality.', visual: 'visual-climate',
  },
  prism: {
    kicker: 'GOVERNED AI PLATFORM', status: 'PLATFORM CAPABILITY · SOURCE-DESCRIBED', title: 'PRISM',
    desc: 'A control layer described around model routing, policy checks, named approvals, audit trails and usage monitoring for governed AI execution.',
    lens: 'Review the implemented control points, integrations, audit data and operating boundaries.', visual: 'visual-prism',
  },
  gst: {
    kicker: 'SME WORKFLOW', status: 'DEMONSTRATION · SOURCE-REPORTED', title: 'GST Easy',
    desc: 'A bills-and-vouchers workflow concept for organizing invoice inputs and supporting GST-oriented business processes.',
    lens: 'Confirm workflow coverage, supported formats, validation behavior and readiness for real filing contexts.', visual: 'visual-gst',
  },
  lunchbox: {
    kicker: 'LOCAL COMMERCE', status: 'SOURCE-REPORTED · LIVE LISTING', title: 'Lunchbox',
    desc: 'A local food and lunch experience within a broader set of community-facing digital services and commerce ideas.',
    lens: 'Clarify the service footprint, live operating scope, fulfillment model and customer / partner responsibilities.', visual: 'visual-lunch',
  },
};

function renderProject(key) {
  const p = projects[key];
  if (!p) return;
  document.querySelectorAll('.project-tab').forEach((tab) => {
    const selected = tab.dataset.project === key;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  document.getElementById('project-kicker').textContent = p.kicker;
  document.getElementById('project-status').textContent = p.status;
  document.getElementById('project-title').textContent = p.title;
  document.getElementById('project-desc').textContent = p.desc;
  document.getElementById('project-lens').textContent = p.lens;
  const art = document.getElementById('project-visual');
  art.className = `panel-visual ${p.visual}`;
  const graphics = {
    climate: '<span class="climate-point p1"></span><span class="climate-point p2"></span><span class="climate-point p3"></span>',
    prism: '<span class="prism-line l1"></span><span class="prism-line l2"></span><span class="prism-line l3"></span><span class="prism-node n1">USER / TEAM</span><span class="prism-node n2">POLICY + ROUTER</span><span class="prism-node n3">TOOLS + MODELS</span><span class="prism-node n4">HUMAN APPROVAL</span>',
    gst: '<span class="gst-paper"></span><span class="gst-check">✓</span>',
    lunchbox: '<span class="lunch-plate"></span><span class="lunch-label">LOCAL · FOOD · SERVICE</span>',
  };
  art.insertAdjacentHTML('beforeend', graphics[key]);
}

document.querySelectorAll('.project-tab').forEach((tab) => tab.addEventListener('click', () => renderProject(tab.dataset.project)));
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.thesis-step,.project-panel,.phase,.governance-principles article').forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

