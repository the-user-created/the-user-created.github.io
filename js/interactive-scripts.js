const initializeInteractivePortfolio = () => {
	// --- MAIN FUNCTION TO SHOW THE INTERFACE ---
	function showMainInterface() {
		document.documentElement.classList.add('breach-bypassed');
		loadContent('about');

		// The main interface is now displayed via CSS rules triggered
		// by the 'breach-bypassed' class on the <html> element.
		// The previous JS logic that set inline styles has been removed
		// to allow for proper responsive behavior.
	}

	// --- LOGIC TO RUN ON PAGE LOAD ---
	// Universal components that always run
	updateTime();
	setInterval(updateTime, 1000);
	populateLog();
	setupCommandHub();

	// Check the session state and decide what to display
	if (sessionStorage.getItem('breachCompleted') === 'true') {
		showMainInterface();
	} else {
		startBreachProtocol();
	}

	// --- HELPER FUNCTIONS ---

	function completeBreach() {
		sessionStorage.setItem('breachCompleted', 'true');
		const breachStatus = document.getElementById('breach-status');
		const breachContainer = document.getElementById('breach-container');

		if (breachStatus) {
			breachStatus.textContent = 'ACCESS GRANTED. LOADING USER_PROFILE...';
			breachStatus.style.color = 'var(--cp-cyan)';
		}

		if (breachContainer) {
			breachContainer.classList.add('success');
		}

		// Wait for the fade-out animation before showing the main interface
		setTimeout(showMainInterface, 500);
	}

	function startBreachProtocol() {
		const breachGrid = document.getElementById('breach-grid');
		const breachStatus = document.getElementById('breach-status');
		if (!breachGrid || !breachStatus) return;

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

	function updateTime() {
		const timeElement = document.getElementById('system-time');
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		if (timeElement) timeElement.textContent = `${hours}:${minutes}:${seconds}`;
	}

	function populateLog() {
		const logScroller = document.querySelector('#log-scroller ul');
		if (!logScroller) return;
		const logEntries = [
			'INITIATING KERNEL...', 'ICE LAYER INTEGRITY: 98%', 'DAEMON_LINK: ACTIVE',
			'DECRYPTING DATASHARD [UCT.EDU]...', 'LOADING SKILLSET_MATRIX...', 'NETWATCH_PING DETECTED',
			'BYPASSING FIREWALL...', 'CONNECTION TO /DEV/NULL ESTABLISHED', 'AUTHENTICATING USER: D.S.YOUNG',
			'COMPILING CYBERDECK...', 'TRACE_ROUTINE: INITIATED', 'BLACK_ICE COUNTERMEASURES: ONLINE',
			'RENDERING UI_SHELL...', 'QUERYING GITHUB_REPO: the-user-created', 'SPOOLING LINKEDIN_NODE: gilfoyle',
			'SYSTEM READY.',
		];
		const fullLog = [...logEntries, ...logEntries, ...logEntries];
		fullLog.forEach(entry => {
			const li = document.createElement('li');
			li.textContent = entry;
			logScroller.appendChild(li);
		});
	}

	function loadContent(id) {
		const mainContentPane = document.getElementById('main-content-pane');
		if (!mainContentPane) return;
		const template = document.getElementById(`content-${id}`);
		if (template) {
			mainContentPane.innerHTML = '';
			const content = template.content.cloneNode(true);
			mainContentPane.appendChild(content);
			mainContentPane.scrollTop = 0;
			const accordionElement = mainContentPane.querySelector('.accordion');
			if (accordionElement) {
				const collapseElements = accordionElement.querySelectorAll('.accordion-collapse');
				collapseElements.forEach(el => new bootstrap.Collapse(el, {toggle: false}));
			}
		} else {
			mainContentPane.innerHTML = `<div class="content-wrapper"><h2 class="glitch" data-text="ERROR">ERROR</h2><p>Data shard for // ${id.toUpperCase()} not found. System integrity compromised.</p></div>`;
		}
	}

	function setupCommandHub() {
		const commandHub = document.querySelector('.command-hub');
		if (commandHub) {
			commandHub.addEventListener('click', (e) => {
				const navButton = e.target.closest('.nav-button');
				if (navButton) {
					const targetId = navButton.dataset.target;
					loadContent(targetId);
					commandHub.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
					navButton.classList.add('active');
				}
			});
		}
	}
};

// This robust check ensures the script runs only when the DOM is fully ready.
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeInteractivePortfolio);
} else {
	initializeInteractivePortfolio();
}