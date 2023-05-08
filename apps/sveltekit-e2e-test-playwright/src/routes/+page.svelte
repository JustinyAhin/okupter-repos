<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	const REGIONS = [
		{
			slug: 'africa',
			name: 'Africa'
		},
		{
			slug: 'americas',
			name: 'Americas'
		},
		{
			slug: 'asia',
			name: 'Asia'
		},
		{
			slug: 'europe',
			name: 'Europe'
		},
		{
			slug: 'oceania',
			name: 'Oceania'
		}
	];

	let selectedRegion = $page.url.searchParams.get('region') || REGIONS[0].slug;

	const getRegionName = (slug: string) => {
		const region = REGIONS.find((region) => region.slug === slug);
		return region ? region.name : '';
	};

	const handleRegionChange = () => {
		goto(`?region=${selectedRegion}`);
	};
</script>

<svelte:head>
	<title>Fetching countries from {getRegionName(selectedRegion) || 'the world'}</title>
</svelte:head>


<section class="space-y-8">
	<h1>State in URL: the Svelte approach</h1>

	<div>
		<form class="w-full">
			<select bind:value={selectedRegion} on:change={handleRegionChange} aria-label="Region filter" class="sm:w-4/12 select select-bordered">
				{#each REGIONS as region, index}
					<option value={region.slug}>{region.name}</option>
				{/each}
			</select>
		</form>
	</div>

	{#if data.countries.length > 0}
		<table class="table w-full table-zebra">
			<thead>
				<tr>
					<th>Flag</th>
					<th>Name</th>
					<th>Capital</th>
				</tr>
			</thead>
			<tbody>
				{#each data.countries as country}
					<tr>
						<td><img src={country.flags.svg} alt={country.name.official} class="flag" /></td>
						<td>{country.name.official}</td>
						<td>{country.capital}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</section>

<style>
	.flag {
		@apply w-8 h-6;
	}
</style>
