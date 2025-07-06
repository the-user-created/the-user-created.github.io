<script>
	export let open = false;

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			open = false;
		}
	}
</script>

<svelte:window on:keydown={open ? handleKeydown : null} />

{#if open}
	<div
		id="legal-modal"
		class="cyber-modal"
		role="dialog"
		aria-modal="true"
		on:click|self={() => (open = false)}
		tabindex="-1"
	>
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="glitch" data-text="SYSTEM LEGAL NOTICE">SYSTEM LEGAL NOTICE</h3>
				<button class="modal-close" on:click={() => (open = false)} aria-label="Close modal">×</button>
			</div>
			<div class="modal-body">
				<p>
					This is a non-commercial fan project. It is a personal portfolio and a tribute to the aesthetics of
					Cyberpunk 2077®.
				</p>
				<p>
					Cyberpunk 2077® is a trademark of CD PROJEKT S.A. All rights to the original content, names, and
					trademarks belong to their respective owners. This project is not affiliated with, associated,
					authorized, or endorsed by CD PROJEKT S.A.
				</p>
				<p><a href="https://www.cyberpunk.net/" target="_blank">Visit the official Cyberpunk 2077 website.</a></p>
			</div>
		</div>
	</div>
{/if}

<style>
	.cyber-modal {
		display: flex; /* Use flex to easily center content */
		align-items: center;
		justify-content: center;
		position: fixed;
		z-index: 1050;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(10, 25, 47, 0.8);
		backdrop-filter: blur(5px);
	}
</style>
