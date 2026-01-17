<script lang="ts">
	import { onMount } from 'svelte';
	import { revealIndex } from '$lib/stores/reveal';
	import { get } from 'svelte/store';

	export let command: string;
	export let index: number;
	export let typingSpeed = 30;
	export let delayAfter = 150;

	let displayed = '';
	let showContent = false;

	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

	onMount(async () => {
		// ⏳ Wait until it's this component's turn
		while (get(revealIndex) !== index) {
			await sleep(50);
		}

		// ⌨️ Type command
		for (let i = 0; i < command.length; i++) {
			displayed += command[i];
			await sleep(typingSpeed);
		}

		await sleep(delayAfter);
		showContent = true;

		// ➡️ Allow next reveal
		revealIndex.update((n) => n + 1);
	});
</script>

<div class="terminal-reveal">
	<p class="mb-4">&gt; {displayed}</p>

	{#if showContent}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>

<style>
	.terminal-reveal {
		font-family: monospace;
	}

	.content {
		animation: expand 0.2s ease-out;
		transform-origin: top;
	}

	@keyframes expand {
		from {
			opacity: 0;
			transform: scaleY(0.95);
		}
		to {
			opacity: 1;
			transform: scaleY(1);
		}
	}
</style>
