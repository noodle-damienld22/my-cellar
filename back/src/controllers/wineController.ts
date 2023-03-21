import { Route, Get, Tags, Controller, Request } from "tsoa";
import {
  addWine,
  deleteWineId,
  getWine,
  getWines,
  modifyWine,
} from "../services/wineService";
import { AppRequest } from "../models/Request";

export interface Wine {
  id: string;
  categorie?: string;
  name: string;
  date: number;
  providedBy: string;
}

export interface WineId {
  id: string;
}

@Route("wines")
@Tags("Wines")
export class WineController extends Controller {
  //request for collection of all bottles
  @Get("/")
  public async getWines(@Request() request: AppRequest) {
    const db = request.app.locals.db;
    return await getWines(db);
  }

  //request for collection of all bottles
  //   @Get("/wine/{id}")
  //   public async getWine(
  //     @Request() db: Db,
  //     @Path() id: string
  //   ): Promise<Wine | void> {
  //     try {
  //       const wines = await getWine(db, id);
  //       await this.setStatus(200).send(wines);
  //     } catch (error) {
  //       throw console.error("get wine", error);
  //     }
  //   }
  //   // Create a wine
  //   @Response<ValidateErrorJSON>(422, "Validation Failed")
  //   @Post("/wine")
  //   @SuccessResponse("201", "Created")
  //   public async createBottleWine(
  //     @Request() db: Db,
  //     @Body() requestBody: CreateWine
  //   ): Promise<void> {
  //     try {
  //       const createWine = await addWine(db, requestBody);
  //       this.setStatus(201).create(createWine);
  //       return;
  //     } catch (error) {
  //       throw console.error("error create wine", error);
  //     }
  //   }

  //   // Update a wine
  //   @Put("/wine/{id}")
  //   public async updateWine(
  //     @Request() db: Db,
  //     @Path() id: string,
  //     @Body() requestBody: CreateWine
  //   ): Promise<void> {
  //     try {
  //       const modifyWineId = await modifyWine(db, id, requestBody);
  //       this.setStatus(200).send(modifyWineId);
  //     } catch (error) {
  //       throw console.error("update error wine", error);
  //     }
  //   }

  //   // Delete a wine
  //   @Response<ValidateErrorJSON>(422, "Validation Failed")
  //   @Delete("/wine/{id}")
  //   public async deleteWine(@Request() db: Db, id: string): Promise<void> {
  //     try {
  //       const deleteWine = await deleteWineId(db, id);
  //       this.setStatus(200).send(deleteWine);
  //     } catch (error) {
  //       throw console.error("Delete error wine", error);
  //     }
  //   }
}
