const initializeSubpage = () => {
	// --- GRAB ALL NECESSARY DOM ELEMENTS ---
	const timeElement = document.getElementById('system-time');
	const logScroller = document.querySelector('#log-scroller ul');

	// --- HELPER FUNCTIONS ---

	/**
	 * Updates the system clock in the header.
	 */
	function updateTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		if (timeElement) timeElement.textContent = `${hours}:${minutes}:${seconds}`;
	}

	/**
	 * Populates the scrolling log in the sidebar.
	 */
	function populateLog() {
		if (!logScroller) return;
		const pageTitle = document.title;
		let logEntries;


		if (pageTitle.includes("YODA Project")) {
			logEntries = [
				'DATA SHARD [YODA_HASH] MOUNTED',
				'RENDERING ALGORITHM ANALYSIS...',
				'MD5_SEQUENTIAL.DLL - LOADED',
				'MD6_PARALLEL.DLL - OPTIMAL',
				'OPENCL_KERNEL - WARNING: BOTTLENECK',
				'VERILOG_FPGA - HIGH SPEED, LOW CAPACITY',
				'SYSTEM_THRUPUT: 3.1 GB/S',
				'ANALYZING EXECUTION TIMES...',
				'LINKING VIVADO_SUITE_LOGS...',
				'RENDERING COMPARISON_GRAPHS...',
				'VALIDATING HASH_INTEGRITY...',
				'RETURN_PATH: ESTABLISHED',
				'AWAITING USER INPUT...',
				'CONNECTION STABLE',
			];
		} else if (pageTitle.includes("TOPSIS RAT Selection")) {
			logEntries = [
				'DATA SHARD [TOPSIS_HWN] MOUNTED',
				'RENDERING NETWORK ALGORITHM...',
				'MCDM_ENGINE.DLL - OK',
				'LTE_SIM - POOR_PERF',
				'WIFI6_SIM - OPTIMAL',
				'5G_NR_SIM - HIGH_THRUPUT',
				'NETWORK LOAD: 67%',
				'ANALYZING CRITERIA_WEIGHTS...',
				'LINKING SIM_DATABASE...',
				'RENDERING SELECTION_GRAPHS...',
				'VALIDATING HANDOVER_LOGIC...',
				'RETURN_PATH: ESTABLISHED',
				'AWAITING USER INPUT...',
				'CONNECTION STABLE',
			];
		} else if (pageTitle.includes("ARM Encryption/Compression")) {
			logEntries = [
				'DATA SHARD [STM_SHARC] MOUNTED',
				'RENDERING EMBEDDED SYS_DATA...',
				'BLOWFISH_ENCRYPTION.DLL - OK',
				'LZSS_COMPRESSION.SYS - OK',
				'CRC-32 INTEGRITY CHECK - ACTIVE',
				'IRIDIUM SATELLITE UPLINK: STABLE',
				'MCU LOAD: 89%',
				'COMPILING PERFORMANCE METRICS...',
				'LINKING HARDWARE_SPECS: STM32F051',
				'RENDERING TEST GRAPHS...',
				'VALIDATING ATPs...',
				'RETURN_PATH: ESTABLISHED',
				'AWAITING USER INPUT...',
				'CONNECTION STABLE',
			];
		} else if (pageTitle.includes("Enviro-Sense")) {
			logEntries = [
				'DATA SHARD [ENVIRO_SENSE] MOUNTED',
				'RENDERING PROJECT FILE...',
				'SENSOR_NETWORK.DLL - OK',
				'ESP32_FIRMWARE.HEX - LOADED',
				'POWER_MANAGEMENT - ACTIVE',
				'SIGNAL STRENGTH: 92%',
				'THERMAL_STATUS: 24.7°C',
				'COMPILING FIELD DATA...',
				'LINKING HARDWARE_SPECS...',
				'RENDERING DIAGRAMS...',
				'VALIDATING DATA_ACCURACY...',
				'RETURN_PATH: ESTABLISHED',
				'AWAITING USER INPUT...',
				'CONNECTION STABLE',
			];
		} else { // Default to FERS or a generic log
			logEntries = [
				'DATA SHARD [FERS] MOUNTED',
				'RENDERING PROJECT FILE...',
				'MEMORY_LEAK_ANALYSIS.DLL - OK',
				'MULTITHREADING_CORE.SYS - OK',
				'BACKWARD_COMPAT_LAYER - ACTIVE',
				'CPU USAGE: 78%',
				'THERMAL_STATUS: NOMINAL',
				'COMPILING PERFORMANCE METRICS...',
				'LINKING GITHUB_REPO: FERS',
				'RENDERING GRAPHS...',
				'VALIDATING REGRESSION_TESTS...',
				'RETURN_PATH: ESTABLISHED',
				'AWAITING USER INPUT...',
				'CONNECTION STABLE',
			];
		}

		const fullLog = [...logEntries, ...logEntries, ...logEntries];
		fullLog.forEach(entry => {
			const li = document.createElement('li');
			li.textContent = entry;
			logScroller.appendChild(li);
		});
	}

	function setupModal() {
		const desktopBtn = document.getElementById('legal-disclaimer-btn-desktop');
		const mobileBtn = document.getElementById('legal-disclaimer-btn-mobile');
		const modal = document.getElementById('legal-modal');
		const closeBtn = document.getElementById('modal-close-btn');

		function openModal() {
			if (modal) modal.classList.remove('hidden');
		}

		function closeModal() {
			if (modal) modal.classList.add('hidden');
		}

		if (modal && closeBtn) {
			if (desktopBtn) desktopBtn.addEventListener('click', openModal);
			if (mobileBtn) mobileBtn.addEventListener('click', openModal);

			closeBtn.addEventListener('click', closeModal);

			modal.addEventListener('click', (e) => {
				if (e.target === modal) {
					closeModal();
				}
			});
		}
	}

	// --- INITIALIZATION LOGIC ---
	updateTime();
	setInterval(updateTime, 1000);
	populateLog();
	setupModal();
};

// This robust check ensures the script runs only when the DOM is fully ready.
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeSubpage);
} else {
	initializeSubpage();
}
