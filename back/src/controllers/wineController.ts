import { Route, Get, Tags, Controller, Request, Path, Body, SuccessResponse, Post, Put, Delete, Patch } from 'tsoa';
import { AppRequest } from '../models/Request';
import { DrinkCreation, PartialDrink } from '../models/Drink';
import { addDrink, deleteDrink, editDrink, getDrink, getDrinks, patchDrink } from '../services/drinkService';

@Route('drinks')
@Tags('Drinks')
export class DrinkController extends Controller {
  //request for collection of all bottles
  @Get()
  public async getDrinksRoute(@Request() request: AppRequest) {
    const db = request.app.locals.db;
    return await getDrinks(db);
  }

  // request for collection of a bottle
  @Get('{id}')
  public async getDrinkRoute(@Request() request: AppRequest, @Path() id: string) {
    const db = request.app.locals.db;
    return await getDrink(db, id);
  }

  @Post('/')
  @SuccessResponse('201', 'Created')
  public async addDrinkRoute(@Request() request: AppRequest, @Body() requestBody: DrinkCreation) {
    const db = request.app.locals.db;
    return await addDrink(db, requestBody);
  }

  @Put('{id}')
  public async editDrinkRoute(@Request() request: AppRequest, @Path() id: string, @Body() requestBody: DrinkCreation) {
    const db = request.app.locals.db;
    return await editDrink(db, id, requestBody);
  }

  @Patch('{id}')
  public async patchDrinkRoute(@Request() request: AppRequest, @Path() id: string, @Body() requestBody: PartialDrink) {
    const db = request.app.locals.db;
    return await patchDrink(db, id, requestBody);
  }

  @Delete('{id}')
  public async deleteDrinkRoute(@Request() request: AppRequest, id: string): Promise<void> {
    const db = request.app.locals.db;
    return await deleteDrink(db, id);
  }
}
