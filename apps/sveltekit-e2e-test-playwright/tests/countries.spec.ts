import { test, expect } from '@playwright/test';

test('the user can navigate to the home page and see the list of rows in a table', async ({
	page
}) => {
	await page.goto('/');

	// We check that the page has a table with at least 59 rows.
	// We expect the table to have at least 59 rows because the default region is Africa for which
	// the API returns 59 countries.
	const tableRowsCount = await page.getByRole('table').getByRole('row').count();
	expect(tableRowsCount).toBeGreaterThan(59);
});

test('by default, Africa is selected in the region filter', async ({ page }) => {
	await page.goto('/');

	// Retrieve the region filter and check that the Africa option is selected.
	const regionFilter = page.getByRole('combobox', { name: 'Region filter' });

	await expect(regionFilter).toBeVisible();
	await expect(regionFilter).toHaveValue('africa');
});

test('when the user selects a region, the list of countries is filtered accordingly', async ({
	page
}) => {
	await page.goto('/');

	const regionToSelect = 'europe';

	// Select the Europe region in the region filter.
	const regionFilter = page.getByRole('combobox', { name: 'Region filter' });
	await regionFilter.selectOption(regionToSelect);

	// Check that the table contains at least 53 rows.
	const tableRowsCount = await page.getByRole('table').getByRole('row').count();
	expect(tableRowsCount).toBeGreaterThan(53);

	// Check that the table contains at least 1 row with the country name "France".
	const tableRows = page.getByRole('table').getByRole('row');
	const franceRow = tableRows.filter({ hasText: 'French Republic' }).first();

	await expect(franceRow).toBeVisible();
});

test('when the user selects a region, the URL is updated accordingly', async ({ page }) => {
	await page.goto('/');

	const regionToSelect = 'europe';

	// Select the Europe region in the region filter.
	const regionFilter = page.getByRole('combobox', { name: 'Region filter' });
	await regionFilter.selectOption(regionToSelect);

	// Check that the URL is updated with the selected region.
	await expect(page).toHaveURL(`?region=${regionToSelect}`);
});

test('when the user directly navigates to a URL with a region selected, the list of countries is filtered accordingly', async ({
	page
}) => {
	const regionToSelect = 'europe';

	await page.goto(`/?region=${regionToSelect}`);

	// Check that the table contains at least 53 rows.
	const tableRowsCount = await page.getByRole('table').getByRole('row').count();
	expect(tableRowsCount).toBeGreaterThan(53);

	// Check that the table contains at least 1 row with the country name "France".
	const tableRows = page.getByRole('table').getByRole('row');
	const franceRow = tableRows.filter({ hasText: 'French Republic' }).first();

	await expect(franceRow).toBeVisible();
});

test('when the user directly navigates to a URL with a region selected, the region filter is updated accordingly', async ({
	page
}) => {
	const regionToSelect = 'americas';

	await page.goto(`/?region=${regionToSelect}`);

	// Retrieve the region filter and check that the Europe option is selected.
	const regionFilter = page.getByRole('combobox', { name: 'Region filter' });

	await expect(regionFilter).toBeVisible();
	await expect(regionFilter).toHaveValue(regionToSelect);
});
