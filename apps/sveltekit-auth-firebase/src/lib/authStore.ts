import { writable } from 'svelte/store';

interface AuthUser {
	uid: string;
	email: string;
}

const authUser = writable<AuthUser | undefined>(undefined);

export { authUser };
