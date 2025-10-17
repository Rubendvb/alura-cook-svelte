import categories from '../json/categorias.json';

export type ICategory = (typeof categories)[0];

// O código abaixo serve da mesma forma
// type CategoriesType = typeof categories;
// export type ICategory = CategoriesType[0];
