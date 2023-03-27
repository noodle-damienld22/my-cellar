import { Route, Get, Tags, Controller, Request, Path, Body, SuccessResponse, Post, Put, Delete, Patch } from 'tsoa';
import { AppRequest } from '../models/Request';
import { DrinkCreation, PartialDrink } from '../models/Drink';
import { addDrink, deleteDrink, editDrink, getDrink, getDrinks, patchDrink } from '../services/drinkService';

@Route('drinks')
@Tags('Drinks')
export class DrinkController extends Controller {
  /**
   * Fetch all drinks
   */
  @Get()
  public async getDrinksRoute(@Request() request: AppRequest) {
    const db = request.app.locals.db;
    return await getDrinks(db);
  }

  /**
   * Fetch one drink from his ID
   * @param id ID of the drink. 12 or 24 based hexa string
   */
  @Get('{id}')
  public async getDrinkRoute(@Request() request: AppRequest, @Path() id: string) {
    const db = request.app.locals.db;
    return await getDrink(db, id);
  }

  /**
   * Create a new drink
   */
  @Post('/')
  @SuccessResponse('201', 'Created')
  public async addDrinkRoute(@Request() request: AppRequest, @Body() requestBody: DrinkCreation) {
    const db = request.app.locals.db;
    return await addDrink(db, requestBody);
  }

  /**
   * Edit a a drink from his ID.
   * Replace all properties of the drink
   * @param id ID of the drink. 12 or 24 based hexa string
   */
  @Put('{id}')
  public async editDrinkRoute(@Request() request: AppRequest, @Path() id: string, @Body() requestBody: DrinkCreation) {
    const db = request.app.locals.db;
    return await editDrink(db, id, requestBody);
  }

  /**
   * Patch a a drink from his ID.
   * Replace only specified properties of the drink
   * @param id ID of the drink. 12 or 24 based hexa string
   */
  @Patch('{id}')
  public async patchDrinkRoute(@Request() request: AppRequest, @Path() id: string, @Body() requestBody: PartialDrink) {
    const db = request.app.locals.db;
    return await patchDrink(db, id, requestBody);
  }

  /**
   * Delete a drink from his ID
   * @param id ID of the drink. 12 or 24 based hexa string
   */
  @Delete('{id}')
  public async deleteDrinkRoute(@Request() request: AppRequest, id: string): Promise<void> {
    const db = request.app.locals.db;
    return await deleteDrink(db, id);
  }
}
