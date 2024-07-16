import { prop, index } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Movies
}

export class TopPageAdvantage {
	@prop()
	title: string;

	@prop()
	description: string;
}

export interface TopPageModel extends Base { }

@index({ '$**': 'text' })
export class TopPageModel extends TimeStamps {
	@prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@prop({ unique: true })
	alias: string;

	@prop()
	title: string;

	@prop()
	metaTitle: string;

	@prop()
	metaDescription: string;

	@prop()
	category: string;

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({ type: () => [String] })
	tags: string[];
}
