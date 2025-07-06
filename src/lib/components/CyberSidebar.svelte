<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * @type {string[]}
	 */
	export let logEntries = [
		'INITIATING KERNEL...', 'ICE LAYER INTEGRITY: 98%', 'DAEMON_LINK: ACTIVE',
		'DECRYPTING DATASHARD [UCT.EDU]...', 'LOADING SKILLSET_MATRIX...', 'NETWATCH_PING DETECTED',
		'BYPASSING FIREWALL...', 'CONNECTION TO /DEV/NULL ESTABLISHED', 'AUTHENTICATING USER: D.S.YOUNG',
		'COMPILING CYBERDECK...', 'TRACE_ROUTINE: INITIATED', 'BLACK_ICE COUNTERMEASURES: ONLINE',
		'RENDERING UI_SHELL...', 'QUERYING GITHUB_REPO: the-user-created', 'SPOOLING LINKEDIN_NODE: gilfoyle',
		'SYSTEM READY.'
	];

	// Duplicate the logs to ensure the scroller has enough content to loop
	$: fullLog = [...logEntries, ...logEntries, ...logEntries];
</script>

<aside id="cyber-sidebar">
	<div class="sidebar-logo glitch" data-text="DSY">DSY</div>
	<div class="system-status">
		<div class="status-bar-group">
			<div class="status-label">CPU</div>
			<div class="status-bar">
				<div class="status-fill cpu-fill"></div>
			</div>
		</div>
		<div class="status-bar-group">
			<div class="status-label">MEM</div>
			<div class="status-bar">
				<div class="status-fill mem-fill"></div>
			</div>
		</div>
		<div class="status-bar-group">
			<div class="status-label">NET</div>
			<div class="status-bar">
				<div class="status-fill net-fill"></div>
			</div>
		</div>
	</div>
	<div id="log-scroller">
		<ul>
			{#each fullLog as entry}
				<li>{entry}</li>
			{/each}
		</ul>
	</div>

	<div class="sidebar-footer d-none d-lg-block">
		<button type="button" class="sidebar-legal-link" on:click={() => dispatch('openLegal')}>
			Legal
		</button>
	</div>
</aside>

<style>
	.sidebar-legal-link {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
</style>
