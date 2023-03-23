import { Route, Get, Tags, Controller, Request, Path, Body, SuccessResponse, Post, Put, Delete } from 'tsoa';
import { addWine, deleteWineId, getWine, getWines, modifyWine } from '../services/wineService';
import { AppRequest } from '../models/Request';
import { CreateWine } from '../models/Wine';

@Route('wines')
@Tags('Wines')
export class WineController extends Controller {
  //request for collection of all bottles
  @Get()
  public async getWines(@Request() request: AppRequest) {
    const db = request.app.locals.db;
    return await getWines(db);
  }

  // request for collection of a bottle
  @Get('{id}')
  public async getWine(@Request() request: AppRequest, @Path() id: string) {
    const db = request.app.locals.db;
    return await getWine(db, id);
  }
  // Create a wine
  @Post('/')
  @SuccessResponse('201', 'Created')
  public async createBottleWine(@Request() request: AppRequest, @Body() requestBody: CreateWine) {
    const db = request.app.locals.db;
    return await addWine(db, requestBody);
  }

  // Update a wine
  @Put('{id}')
  public async updateWine(@Request() request: AppRequest, @Path() id: string, @Body() requestBody: CreateWine) {
    const db = request.app.locals.db;
    return await modifyWine(db, id, requestBody);
  }

  // Delete a wine
  @Delete('{id}')
  public async deleteWine(@Request() request: AppRequest, id: string): Promise<void> {
    const db = request.app.locals.db;
    return await deleteWineId(db, id);
  }
}
