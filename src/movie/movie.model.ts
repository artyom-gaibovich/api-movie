import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class MovieReview {
	@prop()
	review: string;
}

export interface MovieModel extends Base { }
export class MovieModel extends TimeStamps {
	@prop()
	title: string;

	@prop()
	year: number;

	@prop({ type: () => [String] })
	genre: string[];

	@prop()
	rating: number;

	@prop()
	director: string;

	@prop({ type: () => [String] })
	actors: string[];

	@prop()
	plot: string;

	@prop()
	poster: string;

	@prop()
	trailer: string;

	@prop()
	runtime: number;

	@prop()
	awards: string;

	@prop()
	country: string;

	@prop()
	language: string;

	@prop()
	boxOffice: string;

	@prop()
	production: string;

	@prop()
	website: string;

	@prop({ type: () => [MovieReview], _id: false })
	reviews: MovieReview[];
}
