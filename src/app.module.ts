import { Module } from '@nestjs/common';
import { TopPageModule } from './top-page/top-page.module';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { FilesModule } from './files/files.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
		TopPageModule,
		MovieModule,
		ReviewModule,
		FilesModule,
	]
})
export class AppModule { }
