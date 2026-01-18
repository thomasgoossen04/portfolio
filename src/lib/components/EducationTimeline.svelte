<script lang="ts">
	import type { EducationEntry } from '../data/resume';

	export let education: EducationEntry[] = [];

	// Sort chronologically (oldest → newest)
	const sortedEducation = [...education].sort(
		(a, b) => b.startDate.getTime() - a.startDate.getTime()
	);

	const formatDate = (date?: Date | null) => (date ? date.toLocaleDateString() : 'Present');
</script>

<div class="relative ml-4 border-l border-green-600">
	{#each sortedEducation as edu, i}
		<div class="relative mb-8 pl-6">
			<!-- Timeline dot -->
			<div
				class="absolute top-1 -left-[9px] h-4 w-4 rounded-full border border-green-500 bg-black"
			></div>

			<!-- Content -->
			<div class="font-mono text-sm">
				<p class="text-green-400">
					{formatDate(edu.startDate)} — {formatDate(edu.endDate)}
				</p>

				<p class="font-bold text-white">
					{edu.institution}
				</p>

				<p class="text-gray-300">
					{edu.degree} ({edu.field})
				</p>

				<p class="text-gray-500">
					{edu.location}
				</p>
			</div>
		</div>
	{/each}
</div>
