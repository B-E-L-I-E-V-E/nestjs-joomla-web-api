import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class ArticleService {
  constructor(private httpService: HttpService) {}

  public async ReadArticlesAPI() {
    try {
      let errors = [];

      const headers = {
        "Content-Type": "application/json",
        "X-Joomla-Token": process.env.JOOMLA_API_TOKEN,
      };

      let response = await firstValueFrom(
        this.httpService.get(process.env.BLOG_API + `/content/articles`, {
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

      return { response: response.data.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }

  public async ReadArticleByIdAPI(id: number) {
    try {
      let errors = [];

      const headers = {
        "Content-Type": "application/json",
        "X-Joomla-Token": process.env.JOOMLA_API_TOKEN,
      };

      let response = await firstValueFrom(
        this.httpService.get(process.env.BLOG_API + `/content/articles/${id}`, {
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

      return { response: response.data.data, errors: errors };
    } catch (error) {
      return { response: [], errors: [error] };
    }
  }
}
