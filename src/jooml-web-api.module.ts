import { DynamicModule, Module, Provider } from '@nestjs/common';

import { ArticleService } from './services/article/article.service';
import { CategoryService } from './services/category/category.service';
import { ArticleController } from './controllers/article/article.controller';
import { CategoryController } from './controllers/category/category.controller';
import { HttpModule } from '@nestjs/axios';
import { JOOMLA_CONFIG } from './constants';
import {
  JoomlaConfig,
  JoomlaConfigAsync,
} from './types/joomla-config.interface';

@Module({
  imports: [HttpModule],
  providers: [ArticleService, CategoryService],
  exports: [ArticleService, CategoryService],
  controllers: [ArticleController, CategoryController],
})
export class JoomlaWebApiModule {
  static register(config: JoomlaConfig): DynamicModule {
    const joomlaProvider: Provider = {
      provide: JOOMLA_CONFIG,
      useValue: config,
    };

    return {
      module: JoomlaWebApiModule,
      providers: [joomlaProvider],
      exports: [joomlaProvider],
      global: true,
    };
  }

  static registerAsync(config: JoomlaConfigAsync): DynamicModule {
    const joomlaProvider: Provider = {
      provide: JOOMLA_CONFIG,
      useFactory: config.useFactory,
      inject: config.inject,
    };

    return {
      module: JoomlaWebApiModule,
      imports: config.imports,
      providers: [joomlaProvider],
      exports: [joomlaProvider],
      global: true,
    };
  }
}
