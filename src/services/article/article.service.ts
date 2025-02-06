import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

import { JoomlaConfig } from '../../types/joomla-config.interface';
import { JOOMLA_CONFIG } from '../../constants';

@Injectable()
export class ArticleService {
  constructor(
    private httpService: HttpService,
    @Inject(JOOMLA_CONFIG) private joomlaConfig: JoomlaConfig,
  ) {}

  public async ReadArticlesAPI() {
    try {
      const errors = [];

      const headers = {
        'Content-Type': 'application/json',
        'X-Joomla-Token': this.joomlaConfig.apiKey,
      };

      const response = await firstValueFrom(

        this.httpService.get(this.joomlaConfig.baseUrl + `/content/articles`, {
          method: 'GET',
          headers,
        }),
      ).catch((error) => {
        errors.push(error);
        return null;
      });

      if (errors.length > 0) {
        return { response: [], errors: errors };
      }

      return { response: response.data.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }

  public async ReadArticleByIdAPI(id: number) {
    try {
      const errors = [];

      const headers = {
        'Content-Type': 'application/json',
        'X-Joomla-Token': this.joomlaConfig.apiKey,
      };

      const response = await firstValueFrom(
        this.httpService.get(
          this.joomlaConfig.baseUrl + `/content/articles/${id}`,
          {
            method: 'GET',
            headers,
          },
        ),
      ).catch((error) => {
        errors.push(error);
        return null;
      });

      if (errors.length > 0) {
        return { response: [], errors: errors };
      }

      return { response: response.data.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }
}
