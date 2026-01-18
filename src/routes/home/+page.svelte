<script lang="ts">
	import AsciiCard from '$lib/components/AsciiCard.svelte';
	import EducationTimeline from '$lib/components/EducationTimeline.svelte';
	import TerminalReveal from '$lib/components/TerminalReveal.svelte';
	import { resume } from '$lib/data/resume';

	const sortedProgLangs = [...resume.prog_languages].sort((a, b) => b.experience - a.experience);
</script>

<!-- Two-column grid container -->
<div class="grid min-h-screen grid-cols-1 gap-6 p-10 sm:grid-cols-2">
	<!-- LEFT COLUMN -->
	<div class="flex flex-col gap-6">
		<!-- About Me (top-left) -->
		<AsciiCard title="About me">
			<TerminalReveal index={0} command="whoami">
				<p>{resume.about.summary}</p>
			</TerminalReveal>
		</AsciiCard>

		<!-- Education -->
		<AsciiCard title="Education">
			<TerminalReveal index={2} command="cat education.txt">
				<EducationTimeline education={resume.education} />
			</TerminalReveal>
		</AsciiCard>

		<!-- Languages -->
		<AsciiCard title="Languages">
			<TerminalReveal index={3} command="cat languages.txt">
				{#each resume.languages as lang}
					<p>
						{lang.name}: {lang.fluency}<br />
					</p>
				{/each}
			</TerminalReveal>
		</AsciiCard>

		<!-- Contact Info -->
		<AsciiCard title="Contact information">
			<TerminalReveal index={4} command="cat contact.txt">
				<p>
					name: {resume.contact.name}<br />
					email: {resume.contact.email}<br />
					location: {resume.contact.location}<br />
					web: {#each resume.contact.web as web_elem, i}
						<a href={web_elem.url}>
							{#if i != 0}
								&nbsp;//
							{/if}
							<u>
								{web_elem.name}
							</u>
						</a>
					{/each}<br />
				</p>
			</TerminalReveal>
		</AsciiCard>
	</div>

	<!-- RIGHT COLUMN -->
	<div class="flex flex-col gap-6">
		<!-- Programming Skills (Responsive Terminal-style) -->
		<AsciiCard title="Programming Skills">
			<TerminalReveal index={1} command="cat skills.txt">
				<div class="space-y-2 font-mono text-sm">
					{#each sortedProgLangs as prog}
						<div>
							<div class="mb-1 flex justify-between">
								<span>{prog.name}</span>
								<span>{(prog.experience * 100).toFixed(0)}%</span>
							</div>
							<div class="sm relative h-4 w-full overflow-hidden bg-gray-900">
								<div class="h-full bg-green-500" style="width: {prog.experience * 100}%"></div>
								<!-- Optional: subtle stripes for terminal feel -->
								<div
									class="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 opacity-20"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</TerminalReveal>
		</AsciiCard>

		<!-- Projects -->
		<AsciiCard title="Projects">
			<TerminalReveal index={5} command="cat projects.txt">
				{#each resume.projects as proj, i}
					<p>
						{#if i != 0}
							<br />
						{/if}
						<b>{proj.name}</b> - {proj.description}<br />
						Tech stack: {proj.stack}<br />
						<a href={proj.url} target="_blank">Project <u>link</u></a><br />
					</p>
				{/each}
			</TerminalReveal>
		</AsciiCard>
	</div>
</div>
