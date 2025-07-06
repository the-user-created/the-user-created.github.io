<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Import global styles
	import '$lib/styles/styles.css';
	import '$lib/styles/cyberpunk-styles.css';
	import '$lib/styles/fonts.css';

	// Import reusable components
	import CyberSidebar from '$lib/components/CyberSidebar.svelte';
	import CyberHeader from '$lib/components/CyberHeader.svelte';
	import LegalModal from '$lib/components/LegalModal.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { project } = data;

	// --- State Management ---
	let systemTime = '--:--:--';
	let isModalOpen = false;

	// --- Lifecycle & Logic ---
	onMount(() => {
		// On subpages, we assume the breach is already bypassed.
		if (browser) {
			document.documentElement.classList.add('breach-bypassed');
		}

		// Start system clock
		const timerId = setInterval(updateTime, 1000);
		updateTime(); // initial call

		return () => clearInterval(timerId); // Cleanup on component destroy
	});

	function updateTime() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		systemTime = `${hours}:${minutes}:${seconds}`;
	}

	function openModal() {
		isModalOpen = true;
	}
</script>

<svelte:head>
	<title>{project.pageTitle}</title>
	<meta name="description" content="Project Detail: {project.title}" />
	<meta name="author" content="David Young" />

	<!-- Devicon icons-->
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<CyberSidebar logEntries={project.logEntries} on:openLegal={openModal} />

<div id="cyber-interface">
	<CyberHeader {systemTime} statusText="DATA_SHARD_ACCESS" />

	<main id="main-content-pane" class="cyber-main project-detail-pane">
		<div class="content-wrapper">
			<h2 class="mb-5">{project.title}</h2>
			{#if project.github}
				<div class="subheading mb-3">
					<a href={project.github} target="_blank">
						View Project on GitHub <i class="fas fa-external-link-alt"></i>
					</a>
				</div>
			{/if}

			<h3 class="mt-5">Overview</h3>
			<p>{project.overview}</p>

			<h3>Objectives</h3>
			<ul>
				{#each project.objectives as objective}
					<li>{objective}</li>
				{/each}
			</ul>

			<h3>Technologies Used</h3>
			<ul class="list-inline dev-icons">
				{#each project.tech as item}
					<li class="list-inline-item"><i class={item.icon}></i>{item.name}</li>
				{/each}
			</ul>
			{#if project.otherTech}
				<p>Also used: {project.otherTech}</p>
			{/if}

			<h3>Details</h3>
			<p>{project.details}</p>

			<!-- Render images specific to the Details section -->
			{#if project.detailImages && project.detailImages.length > 0}
				<div class="graphs">
					{#each project.detailImages as image}
						<figure class={image.figureClass || ''}>
							<img src={image.src} alt={image.alt} class="img-fluid" />
							<figcaption>{image.caption}</figcaption>
						</figure>
					{/each}
				</div>
			{/if}

			<h3>Challenges</h3>
			<p>{project.challenges}</p>

			<h3>Results</h3>
			<p>{project.results}</p>

			<!-- Render images specific to the Results section -->
			{#if project.resultImages && project.resultImages.length > 0}
				<div class="graphs">
					{#each project.resultImages as image}
						<figure class={image.figureClass || ''}>
							<img src={image.src} alt={image.alt} class="img-fluid" />
							<figcaption>{image.caption}</figcaption>
						</figure>
					{/each}
				</div>
			{/if}

			<div class="report-link-container">
				<a href={project.reportUrl} target="_blank" class="report-link">
					<i class="fas fa-file-pdf"></i> View Full Technical Report
				</a>
			</div>
		</div>
	</main>

	<footer class="cyber-footer command-hub">
		<a href="/" class="nav-button active">
			<span>// RETURN</span> To Mainframe
		</a>
		<button class="nav-button legal-btn d-lg-none" on:click={openModal}>
			<span>// SYS</span> Legal
		</button>
	</footer>
</div>

<LegalModal bind:open={isModalOpen} />
