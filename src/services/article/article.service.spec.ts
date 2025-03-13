import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { JoomlaWebApiModule } from '../../jooml-web-api.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Article } from '../../models/articles.model';

describe('ArticleService', () => {
  let ArticleSvc: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JoomlaWebApiModule.registerAsync({
          imports: [ConfigModule],
          useFactory: async (ConfigSvc: ConfigService) => {
            return {
              baseUrl: ConfigSvc.get<string>('JOOMLA_API'),
              apiKey: ConfigSvc.get<string>('JOOMLA_API_KEY'),
            };
          },
          inject: [ConfigService],
        }),
      ],
    }).compile();

    ArticleSvc = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(ArticleSvc).toBeDefined();
  });

  describe('public ReadArticlesAPI() {}', () => {
    it('should return real articles from the API', async () => {
      const response = await ArticleSvc.ReadArticlesAPI();

      expect(response.errors.length).toBe(0);
      expect(Array.isArray(response.response)).toBe(true);
    });
  });

  describe('public ReadArticlesByCategoryID(id: string) {}', () => {
    it('should return articles filtered by category ID', async () => {
      const categoryId = '13'; // Replace with a valid category ID for testing
      const response = await ArticleSvc.ReadArticlesByCategoryID(categoryId);
      console.log(response);
      expect(response.errors.length).toBe(0);
      expect(Array.isArray(response.response)).toBe(true);
      response.response.forEach((article: Article) => {
        expect(article.relationships.category.data.id).toBe(categoryId);
      });
    });
  });
});
