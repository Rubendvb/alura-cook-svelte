import categories from '../json/categorias.json';

type CategoryFromJson = (typeof categories)[0];

export type ICategory = CategoryFromJson;

// O código abaixo serve da mesma forma
// type CategoriesType = typeof categories;
// export type ICategory = CategoriesType[0];
