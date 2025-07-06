<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment'; // Import browser check

	// Component Imports
	import BreachProtocol from '$lib/components/BreachProtocol.svelte';
	import CyberSidebar from '$lib/components/CyberSidebar.svelte';
	import CyberHeader from '$lib/components/CyberHeader.svelte';
	import CyberFooter from '$lib/components/CyberFooter.svelte';
	import LegalModal from '$lib/components/LegalModal.svelte';

	// Content Section Imports
	import About from '$lib/components/sections/About.svelte';
	import Awards from '$lib/components/sections/Awards.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Interests from '$lib/components/sections/Interests.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Volunteer from '$lib/components/sections/Volunteer.svelte';

	// Import global styles
	import '$lib/styles/styles.css';
	import '$lib/styles/cyberpunk-styles.css';

	// --- State Management ---
	let breachCompleted = false;
	let systemTime = '--:--:--';
	let activeContent = 'about'; // Default content
	let isModalOpen = false;

	const contentComponents = {
		about: About,
		experience: Experience,
		volunteer: Volunteer,
		education: Education,
		projects: Projects,
		skills: Skills,
		interests: Interests,
		awards: Awards
	};

	// This reactive statement applies the class to the <html> tag, not the body.
	// It runs whenever `breachCompleted` changes.
	$: if (browser) {
		document.documentElement.classList.toggle('breach-bypassed', breachCompleted);
	}

	// --- Lifecycle & Logic ---
	onMount(() => {
		// Bypass breach protocol if already completed in this session
		if (sessionStorage.getItem('breachCompleted') === 'true') {
			breachCompleted = true;
		}

		// Start system clock
		const timerId = setInterval(updateTime, 1000);
		updateTime(); // initial call

		return () => clearInterval(timerId); // Cleanup on component destroy
	});

	function handleBreachComplete() {
		sessionStorage.setItem('breachCompleted', 'true');
		breachCompleted = true;
	}

	function updateTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		systemTime = `${hours}:${minutes}:${seconds}`;
	}

	function handleNavigation(event) {
		activeContent = event.detail.target;
	}

	function openModal() {
		isModalOpen = true;
	}
</script>

<svelte:head>
	<title>David Young // Netrunner</title>
	<meta name="description" content="David Young's ePortfolio" />
	<meta name="author" content="David Young" />

	<!-- Font Awesome icons (free version)-->
	<script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
	<!-- Devicon icons-->
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
	<!-- Cyberpunk Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if !breachCompleted}
	<BreachProtocol on:complete={handleBreachComplete} />
{:else}
	<CyberSidebar on:openLegal={openModal} />

	<!-- Main Cyberpunk Interface -->
	<div id="cyber-interface">
		<CyberHeader {systemTime} />

		<main id="main-content-pane" class="cyber-main">
			<svelte:component this={contentComponents[activeContent]} />
		</main>

		<CyberFooter current={activeContent} on:navigate={handleNavigation} on:openLegal={openModal} />
	</div>
{/if}

<LegalModal bind:open={isModalOpen} />
