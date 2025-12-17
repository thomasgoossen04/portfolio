<script lang="ts">
	import { onMount } from 'svelte';

	export let command: string;
	export let typingSpeed = 40; // ms per char
	export let delayAfter = 150; // ms before reveal

	let displayed = '';
	let showContent = false;

	onMount(async () => {
		for (let i = 0; i < command.length; i++) {
			displayed += command[i];
			await new Promise((r) => setTimeout(r, typingSpeed));
		}

		await new Promise((r) => setTimeout(r, delayAfter));
		showContent = true;
	});
</script>

<div class="terminal-reveal">
	<p class="mb-4">
		> {displayed}
	</p>

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
