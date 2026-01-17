<script lang="ts">
	import AsciiCard from '$lib/components/AsciiCard.svelte';
	import TerminalReveal from '$lib/components/TerminalReveal.svelte';
	import { resume } from '$lib/data/resume';

	const sortedProgLangs = [...resume.prog_languages].sort((a, b) => b.experience - a.experience);
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-10">
	<!-- About Me -->
	<div class="mt-4 mr-10 w-md">
		<AsciiCard title="About me">
			<TerminalReveal command="whoami">
				<p>{resume.about.summary}</p>
			</TerminalReveal>
		</AsciiCard>
	</div>

	<!-- Contact Info -->
	<div class="mt-4 mr-10 w-md">
		<AsciiCard title="Contact information">
			<TerminalReveal command="cat contact.txt">
				<p>
					name: {resume.contact.name}<br />
					email: {resume.contact.email}<br />
					phone: {resume.contact.phone}<br />
					location: {resume.contact.location}<br />
					web: {resume.contact.web}<br />
				</p>
			</TerminalReveal>
		</AsciiCard>
	</div>

	<!-- Education -->
	<div class="mt-4 mr-10 w-md">
		<AsciiCard title="Education">
			<TerminalReveal command="cat education.txt">
				{#each resume.education as edu}
					<p>
						<b>{edu.institution}</b> - {edu.degree} ({edu.field})<br />
						{edu.startDate.toLocaleDateString()} - {edu.endDate
							? edu.endDate.toLocaleDateString()
							: 'Present'}<br />
						Location: {edu.location}<br /><br />
					</p>
				{/each}
			</TerminalReveal>
		</AsciiCard>
	</div>

	<!-- Languages -->
	<div class="mt-4 mr-10 w-md">
		<AsciiCard title="Languages">
			<TerminalReveal command="cat languages.txt">
				{#each resume.languages as lang}
					<p>
						{lang.name}: {lang.fluency}<br />
					</p>
				{/each}
			</TerminalReveal>
		</AsciiCard>
	</div>

	<!-- Programming Languages / Skills -->
	<div class="mt-6 flex flex-wrap justify-center">
		<div class="mt-4 mr-10 w-md">
			<AsciiCard title="Programming Skills">
				<TerminalReveal command="cat skills.txt">
					<div class="space-y-2">
						{#each sortedProgLangs as prog}
							<div>
								<div class="mb-1 flex justify-between text-sm font-medium">
									<span>{prog.name}</span>
									<span>{(prog.experience * 100).toFixed(0)}%</span>
								</div>
								<div class="h-3 w-full rounded-full bg-gray-300">
									<div
										class="h-3 rounded-full bg-green-500"
										style="width: {prog.experience * 100}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</TerminalReveal>
			</AsciiCard>
		</div>
	</div>
</div>
