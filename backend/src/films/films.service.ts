import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Film } from './interfaces/film.interface';

@Injectable()
export class FilmsService {
  constructor(private readonly http: AxiosAdapter) {}

  public async findAll() {
    try {
      const data = await this.http.get<Film>(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=es-ES&page=1`,
      );
      return data.results;
    } catch (error) {
      throw new InternalServerErrorException(
        'An error has ocurred while trying to get the films',
      );
    }
  }

  public async findOne(id: number) {
    try {
      const data = await this.http.get<Film>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=es-ES`,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        'An error has ocurred while trying to get the film',
      );
    }
  }
}
