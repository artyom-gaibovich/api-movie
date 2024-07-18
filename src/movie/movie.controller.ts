import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	Query,
	Res,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FindMovieDto } from './dto/find-movie.dto';
import { MOVIE_NOT_FOUND_ERROR } from './movie.constants';
import { MovieModel } from './movie.model';
import { MovieService } from './movie.service';
import { Response } from 'express';
import { GetMoviesDto } from './dto/get-movies-dto';

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Post('create')
	async create(@Body() dto: CreateMovieDto[]) {
		return this.movieService.createMany(dto);
	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const movie = await this.movieService.findById(id);
		if (!movie) {
			throw new NotFoundException(MOVIE_NOT_FOUND_ERROR);
		}
		return movie;
	}

	@Get()
	async getAll(@Query() dto: GetMoviesDto, @Res() res: Response) {
		const { limit = 10, page = 1 } = dto;
		const movies = await this.movieService.findAll(dto);
		const totalCount = await this.movieService.countAll();
		res.set('x-total-count', totalCount.toString());
		return res.send(movies);
	}

	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedMovie = await this.movieService.deleteById(id);
		if (!deletedMovie) {
			throw new NotFoundException(MOVIE_NOT_FOUND_ERROR);
		}
	}

	@Patch(':id')
	async patch(@Param('id', IdValidationPipe) id: string, @Body() dto: CreateMovieDto) {
		const updatedMovie = await this.movieService.updateById(id, dto);
		if (!updatedMovie) {
			throw new NotFoundException(MOVIE_NOT_FOUND_ERROR);
		}
		return updatedMovie;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindMovieDto) {
		return this.movieService.findWithReviews(dto);
	}
}
