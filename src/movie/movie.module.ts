import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MovieController } from './movie.controller';
import { MovieModel } from './movie.model';
import { MovieService } from './movie.service';

@Module({
	controllers: [MovieController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: MovieModel,
				schemaOptions: {
					collection: 'Movie'
				}
			}
		])
	],
	providers: [MovieService]
})
export class MovieModule { }
