<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';

	const text = 'Welcome! This is some placeholder text...';
	let displayed = '';
	let index = 0;
	let done = false;

	const TYPE_SPEED = 40;

	function startTyping() {
		const interval = setInterval(() => {
			displayed += text[index];
			index++;

			if (index >= text.length) {
				clearInterval(interval);
				setTimeout(() => {
					done = true;
				}, 300);
			}
		}, TYPE_SPEED);
	}

	function continueToSite() {
		goto('/home');
	}

	onMount(startTyping);
</script>

<section class="welcome">
	<div class="terminal-line">
		<span>{displayed}</span>
		<span class="cursor">█</span>
	</div>

	{#if done}
		<button class="continue" on:click={continueToSite} in:fly={{ y: 6, duration: 250 }}>
			[ continue ]
		</button>
	{/if}
</section>

<style>
	.welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: var(--color-surface-950);
		color: var(--color-surface-50);
	}

	.terminal-line {
		font-size: 1.2rem;
		white-space: pre;
	}

	.cursor {
		margin-left: 2px;
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.continue {
		margin-top: 1.5rem;
		background: none;
		color: var(--color-surface-200);
		padding: 0.25rem 0.75rem;
		font-family: inherit;
		cursor: pointer;
	}

	.continue:hover {
		color: #fff;
	}
</style>
