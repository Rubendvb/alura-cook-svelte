import { writable } from 'svelte/store';

const { subscribe, set, update } = writable<string[]>([]);

export const arrayList = {
	subscribe,
	set,
	addingIngredient(ingredient: string) {
		update((currentValue) => [...currentValue, ingredient]);
	},

	removeIngredient(ingredient: string) {
		update((currentValue) => currentValue.filter((item) => item !== ingredient));
	}
};
