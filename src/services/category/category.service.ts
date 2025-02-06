import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { JOOMLA_CONFIG } from '../../constants';
import { JoomlaConfig } from '../../types/joomla-config.interface';

@Injectable()
export class CategoryService {
  constructor(
    private httpService: HttpService,
    @Inject(JOOMLA_CONFIG) private joomlaConfig: JoomlaConfig,
  ) {}

  public async ReadCategoriesAPI() {
    try {
      const errors = [];

      const headers = {
        'Content-Type': 'application/json',
        'X-Joomla-Token': this.joomlaConfig.apiKey,
      };

      const response = await firstValueFrom(
        this.httpService.get(
          this.joomlaConfig.baseUrl + `/content/categories`,
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

      return { response: response.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }

  public async ReadCategoryByIdAPI(id: number) {
    try {
      const errors = [];

      const headers = {
        'Content-Type': 'application/json',
        'X-Joomla-Token': this.joomlaConfig.apiKey,
      };

      const response = await firstValueFrom(
        this.httpService.get(
          this.joomlaConfig.baseUrl + `/content/categories/${id}`,
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

      return { response: response.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }
}
