export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	description: string;
	adventages: string;
	disAdventages: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	};
}
