import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CategoryService {
  constructor(private httpService: HttpService) {}
  public async ReadCategoriesAPI() {
    try {
      let errors = [];

      const headers = {
        "Content-Type": "application/json",
        "X-Joomla-Token": process.env.JOOMLA_API_TOKEN,
      };

      let response = await firstValueFrom(
        this.httpService.get(process.env.BLOG_API + `/content/categories`, {
          method: "GET",
          headers,
        }),
      ).catch((error) => {
        console.log(error);
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
      let errors = [];

      const headers = {
        "Content-Type": "application/json",
        "X-Joomla-Token": process.env.JOOMLA_API_TOKEN,
      };

      let response = await firstValueFrom(
        this.httpService.get(
          process.env.BLOG_API + `/content/categories/${id}`,
          {
            method: "GET",
            headers,
          },
        ),
      ).catch((error) => {
        console.log(error);
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
