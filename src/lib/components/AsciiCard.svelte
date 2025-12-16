<script lang="ts">
	export let title: string | null = null;
</script>

<div class="ascii-card">
	{#if title}
		<div class="ascii-title">{title}</div>
	{/if}

	<div class="ascii-content">
		<slot />
	</div>
</div>

<style>
	.ascii-card {
		position: relative;
		padding: 1.25rem;
		font-family: var(--base-font-family);
		color: var(--color-surface-50);
		background: var(--color-surface-950);
		border: 1px solid var(--color-surface-400);
	}

	/* Corners */
	.ascii-card::before,
	.ascii-card::after {
		content: '';
		position: absolute;
		width: 8px;
		height: 8px;
	}

	.ascii-card::before {
		top: -1px;
		left: -1px;
		border-top: 1px solid var(--color-surface-400);
		border-left: 1px solid var(--color-surface-400);
	}

	.ascii-card::after {
		bottom: -1px;
		right: -1px;
		border-bottom: 1px solid var(--color-surface-400);
		border-right: 1px solid var(--color-surface-400);
	}

	.ascii-title {
		position: absolute;
		top: -0.7rem;
		left: 0.75rem;
		padding: 0 0.5rem;
		background: var(--color-surface-950);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.ascii-content {
		font-size: 0.9rem;
		line-height: 1.5;
	}
</style>
