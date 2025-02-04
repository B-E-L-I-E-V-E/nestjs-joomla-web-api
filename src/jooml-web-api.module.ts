import { Module } from '@nestjs/common';

import {
  ArticleService,
} from "./services/article/article.service";
import { CategoryService } from "./services/category/category.service";
import { ArticleController } from "./controllers/article/article.controller";
import { CategoryController } from "./controllers/category/category.controller";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [ArticleService, CategoryService],
  exports: [ArticleService, CategoryService],
  controllers: [ArticleController, CategoryController],
})
export class JoomlaWebApiModule {}
