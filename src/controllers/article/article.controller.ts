import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Version } from '@nestjs/common';
import { ArticleService } from '../../services/article/article.service';

@ApiTags('Article')
@ApiBearerAuth('Bearer')
@Controller('article')
export class ArticleController {
  constructor(private ArticleSvc: ArticleService) {}

  @Get('read') @Version('1') async ReadArticles() {
    return await this.ArticleSvc.ReadArticlesAPI();
  }

  @Get('read/:id')
  @ApiParam({ name: 'id', required: true })
  @Version('1')
  async ReadArticlesById(@Param() params: { id: number }) {
    return await this.ArticleSvc.ReadArticleByIdAPI(params.id);
  }

  @Get('read/category/:id')
  @ApiParam({ name: 'id', required: true })
  @Version('1')
  async ReadArticlesByCategoryID(@Param() params: { id: string }) {
    return await this.ArticleSvc.ReadArticlesByCategoryID(params.id);
  }
}
