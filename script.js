const projectData = {
  climate: {
    category: 'RESEARCH INTELLIGENCE', status: 'SOURCE-REPORTED · LIVE LISTING', title: 'Climate AI',
    description: 'A climate evidence workspace for finding, screening and tracing research across hazards, impacts and adaptation.',
    lens: 'Confirm source coverage, review ownership, operating scope and evidence quality.',
    steps: ['Scientific sources', 'Evidence extraction', 'Source validation', 'Human review', 'Evidence maps'],
  },
  prism: {
    category: 'GOVERNED AI PLATFORM', status: 'SOURCE-DESCRIBED CAPABILITY', title: 'PRISM AI',
    description: 'A governed AI platform described around model routing, policy control, human approvals, audit trails and usage monitoring.',
    lens: 'Review implemented controls, integrations, audit records and operating boundaries.',
    steps: ['User / team', 'Identity & policy', 'Model routing', 'Human approval', 'Audit trail'],
  },
  gst: {
    category: 'SME WORKFLOW', status: 'SOURCE-REPORTED DEMONSTRATION', title: 'GST Easy',
    description: 'A bills-and-vouchers workflow concept for organizing business records and supporting GST-oriented processes.',
    lens: 'Confirm workflow coverage, supported formats, validation behavior and readiness for filing contexts.',
    steps: ['Bills & vouchers', 'Document capture', 'Record review', 'GST workflow', 'Business records'],
  },
  lunchbox: {
    category: 'LOCAL COMMERCE', status: 'SOURCE-REPORTED LIVE LISTING', title: 'Lunchbox',
    description: 'A local food and lunch experience within a broader set of community-facing digital service ideas.',
    lens: 'Clarify service footprint, operating scope, fulfillment model and customer / partner responsibilities.',
    steps: ['Local discovery', 'Menu selection', 'Order request', 'Service fulfilment', 'Customer feedback'],
  },
};

const tabs = [...document.querySelectorAll('.project-tab')];
const flow = document.getElementById('project-flow');

function renderProject(key, focusPanel = false) {
  const project = projectData[key];
  if (!project) return;
  tabs.forEach((tab) => {
    const selected = tab.dataset.project === key;
    tab.classList.toggle('is-active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.getElementById('project-panel').setAttribute('aria-labelledby', `tab-${key}`);
  document.getElementById('project-category').textContent = project.category;
  document.getElementById('project-status').innerHTML = `<i aria-hidden="true"></i>${project.status}`;
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-description').textContent = project.description;
  document.getElementById('project-lens').textContent = project.lens;
  flow.setAttribute('aria-label', `${project.title} illustrative workflow`);
  flow.replaceChildren(...project.steps.flatMap((step, index) => {
    const item = document.createElement('div');
    item.className = `flow-step${index === project.steps.length - 1 ? ' review-step' : ''}`;
    const number = document.createElement('span');
    number.className = 'flow-num';
    number.textContent = String(index + 1).padStart(2, '0');
    const name = document.createElement('span');
    name.className = 'flow-name';
    name.textContent = step;
    item.append(number, name);
    if (index === project.steps.length - 1) return [item];
    const edge = document.createElement('span');
    edge.className = 'flow-edge';
    edge.setAttribute('aria-hidden', 'true');
    edge.innerHTML = '<svg viewBox="0 0 32 12"><path d="M1 6h27M23 1l6 5-6 5"/></svg>';
    return [item, edge];
  }));
  if (focusPanel) document.getElementById('project-panel').focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => renderProject(tab.dataset.project));
  tab.addEventListener('keydown', (event) => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[next].focus();
    renderProject(tabs[next].dataset.project);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));

renderProject('climate');

