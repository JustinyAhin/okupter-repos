import type { PageServerLoad } from './$types';
import type { Country } from '$lib/types';
import { error } from '@sveltejs/kit';

const API_URL = 'https://restcountries.com/v3.1';

const getCountriesByRegion = async (region: string) => {
	const response = await fetch(`${API_URL}/region/${region}`);

	if (!response.ok) {
		throw error(response.status, {
			message: 'An error occurred while fetching the countries'
		});
	}

	const countries = (await response.json()) as Country[];

	return countries;
};

export const load = (async ({ url }) => {
	// Per default, only fetch the countries from the African continent
	const region = url.searchParams.get('region') || 'africa';

	const countries = await getCountriesByRegion(region);

	return {
		countries
	};
}) satisfies PageServerLoad;
