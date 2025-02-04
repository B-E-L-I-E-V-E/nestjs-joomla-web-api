import {DynamicModule, Module, Provider} from '@nestjs/common';

import {
  ArticleService,
} from "./services/article/article.service";
import { CategoryService } from "./services/category/category.service";
import { ArticleController } from "./controllers/article/article.controller";
import { CategoryController } from "./controllers/category/category.controller";
import {HttpModule} from "@nestjs/axios";
import {JOOMLA_TOKEN} from "./constants";

@Module({
  imports: [HttpModule],
  providers: [ArticleService, CategoryService],
  exports: [ArticleService, CategoryService],
  controllers: [ArticleController, CategoryController],
})
export class JoomlaWebApiModule {
  static forRoot(config: { token: string;  }) : DynamicModule {
    const joomlaProvider: Provider = {
      provide: JOOMLA_TOKEN,
      useValue: config.token,
    }

    return {
      module: JoomlaWebApiModule,
      providers: [joomlaProvider],
      exports: [joomlaProvider],
      global: true
    }
  }
}
