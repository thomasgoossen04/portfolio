<script lang="ts">
	import AsciiCard from '$lib/components/AsciiCard.svelte';
	import TerminalReveal from '$lib/components/TerminalReveal.svelte';
	import { resume } from '$lib/data/resume';
</script>

<div class="m-10">
	<div class="flex flex-wrap">
		<div class="mt-4 mr-10 w-md">
			<AsciiCard title="About me">
				<TerminalReveal command="whoami">
					<p>
						{resume.about.summary}<br />
					</p>
				</TerminalReveal>
			</AsciiCard>
		</div>

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
	</div>
</div>
