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
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import {IdValidationPipe} from '../pipes/ad-validation.pipe';
import {CreateMovieDto} from './dto/create-movie.dto';
import {FindMovieDto} from './dto/find-movie.dto';
import {MOVIE_NOT_FOUND_ERROR} from './movie.constants';
import {MovieService} from './movie.service';

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService) {}

	@Post('create')
	async create(@Body() dto: CreateMovieDto) {
		return this.movieService.create(dto);
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
	async getAll() {
		return this.movieService.findAll();
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
