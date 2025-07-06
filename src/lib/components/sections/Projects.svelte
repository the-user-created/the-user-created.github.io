<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

	// TODO: Recreate accordion without Bootstrap
    onMount(() => {
        if (browser) {
            import('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    });
</script>

<div class="content-wrapper">
	<h2 class="mb-5">Past Ops</h2>
	<h3 class="mb-3">Academic Heists</h3>
	<div class="accordion" id="projectsAccordion">
		<!-- EEE4022S -->
		<div class="accordion-item">
			<h2 class="accordion-header" id="projectZeroHeading">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#projectZero"
					aria-expanded="false"
					aria-controls="projectZero"
				>
					FERS Neuro-Upgrade: Modernising a Legacy Radar System
				</button>
			</h2>
			<div
				id="projectZero"
				class="accordion-collapse collapse"
				aria-labelledby="projectZeroHeading"
				data-bs-parent="#projectsAccordion"
			>
				<div class="accordion-body">
					<p>
						This gig was a deep-dive into digital archeology: dragging a legacy radar simulator (FERS) kicking and
						screaming from C++98/03 into the C++20/23 era. The op was to boost performance, overhaul its
						maintenance protocols, and make sure the old beast could interface with modern chrome. Basically,
						future-proofing some critical software so it doesn't flatline.
					</p>
					<a href="/projects/fers">View Op Details</a>
				</div>
			</div>
		</div>
		<!-- EEE3097S -->
		<div class="accordion-item">
			<h2 class="accordion-header" id="projectOneHeading">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#projectOne"
					aria-expanded="false"
					aria-controls="projectOne"
				>
					Data Smuggling on a Budget: Encrypting & Compressing on ARM
				</button>
			</h2>
			<div
				id="projectOne"
				class="accordion-collapse collapse"
				aria-labelledby="projectOneHeading"
				data-bs-parent="#projectsAccordion"
			>
				<div class="accordion-body">
					<p>
						The mission: lock down sensitive data transmissions from buoys in the Antarctic wastes. Working on a
						resource-starved STM32F051 chip, I implemented LZSS compression to shrink the data footprint and
						Blowfish encryption to wrap it in corpo-grade security for its trip through the Iridium sat-net. The
						result: a lean, mean, and secure data-stream that kept transmission costs from bankrupting the
						operation.
					</p>
					<a href="/projects/stm_data_sharc">View Op Details</a>
				</div>
			</div>
		</div>
		<!-- EEE4120F -->
		<div class="accordion-item">
			<h2 class="accordion-header" id="projectTwoHeading">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#projectTwo"
					aria-expanded="false"
					aria-controls="projectTwo"
				>
					Hashing Showdown: A Comparative Analysis of MD5 & MD6
				</button>
			</h2>
			<div
				id="projectTwo"
				class="accordion-collapse collapse"
				aria-labelledby="projectTwoHeading"
				data-bs-parent="#projectsAccordion"
			>
				<div class="accordion-body">
					<p>
						This project was a digital cage match: pitting the MD5 and MD6 hashing algorithms against each other. I
						ran them through their paces in C++ (software), OpenCL (GPU), and Verilog (pure hardware). The goal
						was to benchmark the trade-offs between flexible code and raw, on-the-metal speed, proving just how
						much preem performance you can squeeze out of parallel processing for crypto work.
					</p>
					<a href="/projects/yoda">View Op Details</a>
				</div>
			</div>
		</div>
		<!-- EEE4113F -->
		<div class="accordion-item">
			<h2 class="accordion-header" id="projectFourHeading">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#projectFour"
					aria-expanded="false"
					aria-controls="projectFour"
				>
					Enviro-Sense: Biomonitoring Grid for Apex Predators
				</button>
			</h2>
			<div
				id="projectFour"
				class="accordion-collapse collapse"
				aria-labelledby="projectFourHeading"
				data-bs-parent="#projectsAccordion"
			>
				<div class="accordion-body">
					<p>
						A custom-built wireless sensor grid designed to monitor environmental conditions at raptor nesting sites.
						The system runs on a network of ESP32-PICO-D4 motes and Raspberry Pi Zeros, equipped with DHT11 sensors.
						The whole rig was built to be a cheap, reliable, and power-sipping solution for beaming back a live
						data-feed from the wild. A low-tech surveillance op, but for actual birds of prey.
					</p>
					<a href="/projects/enviro_sense">View Op Details</a>
				</div>
			</div>
		</div>
	</div>
</div>
