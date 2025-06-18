window.addEventListener('DOMContentLoaded', () => {

	// --- DOM ELEMENT REFERENCES ---
	const breachContainer = document.getElementById('breach-container');
	const cyberInterface = document.getElementById('cyber-interface');
	const cyberSidebar = document.getElementById('cyber-sidebar');
	const breachGrid = document.getElementById('breach-grid');
	const breachStatus = document.getElementById('breach-status');
	const timeElement = document.getElementById('system-time');
	const logScroller = document.querySelector('#log-scroller ul');
	const commandHub = document.querySelector('.command-hub');
	const mainContentPane = document.getElementById('main-content-pane');

	// --- SESSION & CONTENT LOADING LOGIC ---
	function loadContent(id) {
		const template = document.getElementById(`content-${id}`);
		if (template) {
			mainContentPane.innerHTML = ''; // Clear previous content
			const content = template.content.cloneNode(true);
			mainContentPane.appendChild(content);

			const accordionElement = mainContentPane.querySelector('.accordion');
			if (accordionElement) {
				const collapseElements = accordionElement.querySelectorAll('.accordion-collapse');
				collapseElements.forEach(el => new bootstrap.Collapse(el, {toggle: false}));
			}
		} else {
			mainContentPane.innerHTML = `<div class="content-wrapper"><h2 class="glitch" data-text="ERROR">ERROR</h2><p>Data shard for // ${id.toUpperCase()} not found. System integrity compromised.</p></div>`;
		}
	}

	function showMainInterface() {
		breachContainer.style.display = 'none'; // Hide breach immediately
		cyberInterface.classList.remove('hidden');
		cyberSidebar.classList.remove('hidden');
		loadContent('about'); // Load default content
	}

	// --- CHECK FOR ESTABLISHED SESSION ---
	// This is the core of the new logic.
	if (sessionStorage.getItem('session_established') === 'true') {
		// If session exists, bypass breach protocol.
		showMainInterface();
	} else {
		// --- BREACH PROTOCOL INTERACTIVITY ---
		const sequenceLength = 5;
		const hexChars = ['1C', 'E9', '55', '7A', 'BD', 'FF', 'B3'];
		let selectedCount = 0;

		for (let i = 0; i < 25; i++) {
			const cell = document.createElement('div');
			cell.classList.add('breach-cell');
			cell.dataset.text = hexChars[Math.floor(Math.random() * hexChars.length)];
			cell.textContent = cell.dataset.text;
			cell.addEventListener('click', () => {
				if (!cell.classList.contains('selected')) {
					cell.classList.add('selected');
					selectedCount++;
					breachStatus.textContent = `SEQUENCE ${selectedCount} OF ${sequenceLength} ACCEPTED...`;
					if (selectedCount >= sequenceLength) {
						completeBreach();
					}
				}
			});
			breachGrid.appendChild(cell);
		}
	}

	function completeBreach() {
		breachStatus.textContent = 'ACCESS GRANTED. LOADING USER_PROFILE...';
		breachStatus.style.color = 'var(--cp-cyan)';

		// Set the session key so the user bypasses this next time.
		sessionStorage.setItem('session_established', 'true');

		breachContainer.classList.add('success');

		setTimeout(() => {
			showMainInterface();
		}, 500); // Match CSS transition duration
	}

	// --- SYSTEM CLOCK ---
	function updateTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		timeElement.textContent = `${hours}:${minutes}:${seconds}`;
	}

	setInterval(updateTime, 1000);
	updateTime();

	// --- SIDEBAR LOG SCROLLER ---
	const logEntries = [
		'INITIATING KERNEL...', 'ICE LAYER INTEGRITY: 98%', 'DAEMON_LINK: ACTIVE',
		'DECRYPTING DATASHARD [UCT.EDU]...', 'LOADING SKILLSET_MATRIX...',
		'NETWATCH_PING DETECTED', 'BYPASSING FIREWALL...', 'CONNECTION TO /DEV/NULL ESTABLISHED',
		'AUTHENTICATING USER: D.S.YOUNG', 'COMPILING CYBERDECK...', 'TRACE_ROUTINE: INITIATED',
		'BLACK_ICE COUNTERMEASURES: ONLINE', 'RENDERING UI_SHELL...',
		'QUERYING GITHUB_REPO: the-user-created', 'SPOOLING LINKEDIN_NODE: gilfoyle', 'SYSTEM READY.',
	];
	const fullLog = [...logEntries, ...logEntries, ...logEntries];
	fullLog.forEach(entry => {
		const li = document.createElement('li');
		li.textContent = entry;
		logScroller.appendChild(li);
	});

	// --- NAVIGATION EVENT LISTENER ---
	commandHub.addEventListener('click', (e) => {
		const navButton = e.target.closest('.nav-button');
		if (navButton) {
			const targetId = navButton.dataset.target;
			loadContent(targetId);
			commandHub.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
			navButton.classList.add('active');
		}
	});
});