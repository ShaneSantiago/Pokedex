import { Router } from "express";
import { ServiceController } from "./Controller/ServicesController"

export const serverRouter = Router()

const servicesController = new ServiceController()


serverRouter.post("/create", servicesController.createService)