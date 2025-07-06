<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let current;

	const navItems = [
		{ id: 'about', label: 'The Lowdown', num: '01' },
		{ id: 'experience', label: 'Gigs', num: '02' },
		{ id: 'volunteer', label: 'Pro-Bono Ops', num: '03' },
		{ id: 'education', label: 'Training', num: '04' },
		{ id: 'projects', label: 'Past Ops', num: '05' },
		{ id: 'skills', label: 'Loadout', num: '06' },
		{ id: 'interests', label: 'Downtime', num: '07' },
		{ id: 'awards', label: 'Cred & Certs', num: '08' }
	];
</script>

<footer class="cyber-footer command-hub">
	{#each navItems as item}
		<button
			class="nav-button"
			class:active={current === item.id}
			on:click={() => dispatch('navigate', { target: item.id })}
		>
			<span>// {item.num}</span> {item.label}
		</button>
	{/each}

	<button class="nav-button legal-btn d-lg-none" on:click={() => dispatch('openLegal')}>
		<span>// SYS</span> Legal
	</button>
</footer>
