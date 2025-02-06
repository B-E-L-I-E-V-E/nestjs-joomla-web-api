import { Controller, Get, Param, Version } from '@nestjs/common';
import { ArticleService } from '../../services/article/article.service';

@Controller('article')
export class ArticleController {
  constructor(private ArticleSvc: ArticleService) {}

  @Get('read') @Version('1') async ReadArticles() {
    return await this.ArticleSvc.ReadArticlesAPI();
  }

  @Get('read/:id')
  @Version('1')
  async ReadArticlesById(@Param() params: { id: number }) {
    return await this.ArticleSvc.ReadArticleByIdAPI(params.id);
  }
}
