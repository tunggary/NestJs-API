import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  //url을 가져오고 함수를 실행시켜주는 역할 => express의 router
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

//controller에서 전부해주면 되는데 service가 필요한이유
//controller와 비즈니스 로직을 구분하기 위해
//service 실제 함수의 작동내용이 담겨있음 (비즈니스 로직)
