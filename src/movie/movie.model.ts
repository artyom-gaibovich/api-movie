import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

class MovieCharacteristic {
	@prop()
	name: string;
	@prop()
	value: string;
}

export interface MovieModel extends Base { }
export class MovieModel extends TimeStamps {
	@prop()
	image: string;

	@prop()
	title: string;

	@prop()
	link: string;

	@prop()
	initialRating: number;

	@prop()
	price: number;

	@prop()
	oldPrice?: number;

	@prop()
	credit: number;

	@prop()
	description: string;

	@prop()
	advantages: string;

	@prop()
	disAdvantages?: string;

	@prop({ type: () => [String] })
	categories: string[];

	@prop({ type: () => [String] })
	tags: string[];

	@prop({ type: () => [MovieCharacteristic], _id: false })
	characteristics: MovieCharacteristic[];
}
