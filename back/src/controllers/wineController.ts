import {
  Route,
  Post,
  Body,
  Get,
  Delete,
  Put,
  Path,
  SuccessResponse,
  Request,
  Response,
} from "tsoa";
import {
  addWine,
  deleteWineId,
  getWine,
  getWines,
  modifyWine,
} from "../services/wineService";
import { Db } from "mongodb";

declare module "express" {
  export interface Request {
    db: Db;
  }
}

export interface Wine {
  id: string;
  categorie?: string;
  name: string;
  date: number;
  providedBy: string;
}

export interface CreateWine {
  categorie?: string;
  name: string;
  date: number;
  providedBy?: string;
}

export interface WineId {
  id: string;
}

interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}

@Route("")
export default class WineController {
  create: any;
  setStatus: any;

  //request for collection of all bottles
  @Get("/")
  public async getWines(@Request() db: Db): Promise<Wine[] | void> {
    try {
      const wines = await getWines(db);
      await this.setStatus(200).send(wines);
    } catch (error) {
      throw console.error("get wines", error);
    }
  }

  //request for collection of all bottles
  @Get("/wine/{id}")
  public async getWine(
    @Request() db: Db,
    @Path() id: string
  ): Promise<Wine | void> {
    try {
      const wines = await getWine(db, id);
      await this.setStatus(200).send(wines);
    } catch (error) {
      throw console.error("get wine", error);
    }
  }
  // Create a wine
  @Response<ValidateErrorJSON>(422, "Validation Failed")
  @Post("/wine")
  @SuccessResponse("201", "Created")
  public async createBottleWine(
    @Request() db: Db,
    @Body() requestBody: CreateWine
  ): Promise<void> {
    try {
      const createWine = await addWine(db, requestBody);
      this.setStatus(201).create(createWine);
      return;
    } catch (error) {
      throw console.error("error create wine", error);
    }
  }

  // Update a wine
  @Put("/wine/{id}")
  public async updateWine(
    @Request() db: Db,
    @Path() id: string,
    @Body() requestBody: CreateWine
  ): Promise<void> {
    try {
      const modifyWineId = await modifyWine(db, id, requestBody);
      this.setStatus(200).send(modifyWineId);
    } catch (error) {
      throw console.error("update error wine", error);
    }
  }

  // Delete a wine
  @Response<ValidateErrorJSON>(422, "Validation Failed")
  @Delete("/wine/{id}")
  public async deleteWine(@Request() db: Db, id: string): Promise<void> {
    try {
      const deleteWine = await deleteWineId(db, id);
      this.setStatus(200).send(deleteWine);
    } catch (error) {
      throw console.error("Delete error wine", error);
    }
  }
}
