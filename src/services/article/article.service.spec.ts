import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let ArticleSvc: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService],
    }).compile();

    ArticleSvc = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(ArticleSvc).toBeDefined();
  });

  describe('public ReadArticlesAPI() {}', () => {
    it('should return articles', async () => {
      const response = await ArticleSvc.ReadArticlesAPI();

      console.log(response);
    })
  })
});
