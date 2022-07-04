import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('/:movieId')
  getOne(@Param('movieId') movieId: number) {
    return this.moviesService.getOne(movieId);
  }
  //@Param을 통해 parameter를 받아올 수 있다
  //무엇인가를 원한다면 요청하면 된다

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:movieId')
  remove(@Param('movieId') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:movieId')
  path(@Param('movieId') movieId: number, @Body() updatedData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updatedData);
  }
}
