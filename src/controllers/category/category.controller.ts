import {ApiBearerAuth, ApiParam, ApiTags} from "@nestjs/swagger";
import {Controller, Get, Param, Version} from "@nestjs/common";
import {CategoryService} from "../../services/category/category.service";

@ApiTags('Category')
@ApiBearerAuth('Bearer')
@Controller('category')
export class CategoryController {
    constructor(private CategorySvc: CategoryService) {}

    @Get('read')
    @Version('1')
    async ReadCategories() {
        return await this.CategorySvc.ReadCategoriesAPI()
    }


    @Get('read/:id')
    @ApiParam({name: 'id', required:true})
    @Version('1')
    async ReadCategoryById(
        @Param() params: { id: number },
    ) {
        console.log(params.id);
        return await this.CategorySvc.ReadCategoryByIdAPI( params.id)
    }
}