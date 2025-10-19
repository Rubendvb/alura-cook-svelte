import categories from '../json/categorias.json';

type CategoryFromJson = (typeof categories)[0];

type CategoryProps = {
	addIngredient?: (ingredient: string) => void;
	removeIngredient?: (ingredient: string) => void;
};

export type ICategory = CategoryFromJson & CategoryProps;

// O código abaixo serve da mesma forma
// type CategoriesType = typeof categories;
// export type ICategory = CategoriesType[0];
