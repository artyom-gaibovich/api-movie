import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import {IsArray, IsString} from "class-validator";

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


	@IsArray()
	@IsString({ each: true })
	review: string[];


	@prop()
	link: string;

	@prop()
	initialRating: number;

	@prop()
	description: string;

	@prop({ type: () => [String] })
	categories: string[];

	@prop({ type: () => [String] })
	tags: string[];

	@prop({ type: () => [MovieCharacteristic], _id: false })
	characteristics: MovieCharacteristic[];
}
