interface Languages {
	[key: string]: string;
}

interface Translation {
	official: string;
	common: string;
}

interface NativeName {
	[key: string]: Translation;
}

interface Name {
	official: string;
	common: string;
	nativeName: NativeName;
}

interface Currencies {
	[key: string]: {
		name: string;
		symbol: string;
	};
}

interface Country {
	name: Name;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: Currencies;
	idd: {
		root: string;
		suffixes: string[];
	};
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: Languages;
	translations: {
		[key: string]: Translation;
	};
	latlng: number[];
	landlocked: boolean;
	borders: string[];
	area: number;
	demonyms: {
		[key: string]: {
			f: string;
			m: string;
		};
	};
	flag: string;
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
	population: number;
	gini: {
		[key: string]: number;
	};
	fifa: string;
	car: {
		signs: string[];
		side: string;
	};
	timezones: string[];
	continents: string[];
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	coatOfArms: {
		png: string;
		svg: string;
	};
	startOfWeek: string;
	capitalInfo: {
		latlng: number[];
	};
	postalCode: {
		format: string;
		regex: string;
	};
}

export type { Country };
