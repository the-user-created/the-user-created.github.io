<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	const sequenceLength = 5;
	const hexChars = ['1C', 'E9', '55', '7A', 'BD', 'FF', 'B3'];
	let cells = [];
	let selectedCount = 0;
	let status = 'MANUAL OVERRIDE: SELECT ANY 5 HEX CODES TO FORCE ACCESS...';
	let isSuccess = false;
	let buttons = []; // To hold references to the button elements

	onMount(() => {
		for (let i = 0; i < 25; i++) {
			cells.push(hexChars[Math.floor(Math.random() * hexChars.length)]);
		}
		cells = cells; // Trigger reactivity
	});

	function selectCell(buttonEl) {
		if (isSuccess || buttonEl.classList.contains('selected')) {
			return;
		}

		buttonEl.classList.add('selected');
		selectedCount++;
		status = `SEQUENCE ${selectedCount} OF ${sequenceLength} ACCEPTED...`;

		if (selectedCount >= sequenceLength) {
			completeBreach();
		}
	}

	function completeBreach() {
		isSuccess = true;
		status = 'ACCESS GRANTED. LOADING USER_PROFILE...';
		setTimeout(() => {
			dispatch('complete');
		}, 500); // Wait for fade-out animation
	}
</script>

<div id="breach-container" class:success={isSuccess}>
	<div class="breach-content">
		<h1 class="glitch" data-text="ACCESS DENIED">ACCESS DENIED</h1>
		<p>BREACH PROTOCOL REQUIRED TO ACCESS SECURE DATA</p>
		<div id="breach-grid">
			{#each cells as char, i}
				<button
					type="button"
					class="breach-cell"
					data-text={char}
					bind:this={buttons[i]}
					on:click={() => selectCell(buttons[i])}
					aria-label="Breach Cell {char}"
				>
					{char}
				</button>
			{/each}
		</div>
		<p id="breach-status" class:success={isSuccess}>{status}</p>
	</div>
</div>

<style>
	#breach-status.success {
		color: var(--cp-cyan);
	}
</style>
