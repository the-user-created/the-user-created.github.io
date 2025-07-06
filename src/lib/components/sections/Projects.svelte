<script>
	import {slide} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';

	let openAccordion = null;

	function toggleAccordion(id) {
		if (openAccordion === id) {
			openAccordion = null;
		} else {
			openAccordion = id;
		}
	}

	const academicProjects = [
		{
			id: 'projectFers',
			title: 'FERS Neuro-Upgrade: Modernising a Legacy Radar System',
			description: `This gig was a deep-dive into digital archeology: dragging a legacy radar simulator (FERS) kicking and screaming from C++98/03 into the C++20/23 era. The op was to boost performance, overhaul its maintenance protocols, and make sure the old beast could interface with modern chrome. Basically, future-proofing some critical software so it doesn't flatline.`,
			link: '/projects/fers'
		},
		{
			id: 'projectArm',
			title: 'Data Smuggling on a Budget: Encrypting & Compressing on ARM',
			description: `The mission: lock down sensitive data transmissions from buoys in the Antarctic wastes. Working on a resource-starved STM32F051 chip, I implemented LZSS compression to shrink the data footprint and Blowfish encryption to wrap it in corpo-grade security for its trip through the Iridium sat-net. The result: a lean, mean, and secure data-stream that kept transmission costs from bankrupting the operation.`,
			link: '/projects/stm_data_sharc'
		},
		{
			id: 'projectYoda',
			title: 'Hashing Showdown: A Comparative Analysis of MD5 & MD6',
			description: `This project was a digital cage match: pitting the MD5 and MD6 hashing algorithms against each other. I ran them through their paces in C++ (software), OpenCL (GPU), and Verilog (pure hardware). The goal was to benchmark the trade-offs between flexible code and raw, on-the-metal speed, proving just how much preem performance you can squeeze out of parallel processing for crypto work.`,
			link: '/projects/yoda'
		},
		{
			id: 'projectEnviroSense',
			title: 'Enviro-Sense: Biomonitoring Grid for Apex Predators',
			description: `A custom-built wireless sensor grid designed to monitor environmental conditions at raptor nesting sites. The system runs on a network of ESP32-PICO-D4 motes and Raspberry Pi Zeros, equipped with DHT11 sensors. The whole rig was built to be a cheap, reliable, and power-sipping solution for beaming back a live data-feed from the wild. A low-tech surveillance op, but for actual birds of prey.`,
			link: '/projects/enviro_sense'
		}
	];
</script>

<div class="content-wrapper">
	<h2 class="mb-5">Past Ops</h2>
	<h3 class="mb-3">Academic Heists</h3>
	<div class="accordion" id="projectsAccordion">
		{#each academicProjects as project (project.id)}
			<div class="accordion-item">
				<h2 class="accordion-header">
					<button
							class="accordion-button"
							class:collapsed={openAccordion !== project.id}
							on:click={() => toggleAccordion(project.id)}
							aria-expanded={openAccordion === project.id}
							type="button"
					>
						{project.title}
					</button>
				</h2>

				{#if openAccordion === project.id}
					<div
							class="accordion-collapse"
							transition:slide={{ duration: 300, easing: quintOut }}
					>
						<div class="accordion-body">
							<p>{@html project.description}</p>
							<a href={project.link}>View Op Details</a>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.accordion-button::after {
		transition: transform 0.3s ease-in-out;
	}
</style>
