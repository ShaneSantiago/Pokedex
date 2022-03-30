import { Request, Response } from "express";
import { ServicesBusiness } from "../Business/ServicesBusiness";
import { ServicesInputDTO } from "../model/Services";

export class ServiceController{

    async createService(req: Request, res: Response){

        try {
            
            const {date, status, category, observation} = req.body

            const input: ServicesInputDTO = {
                date: Date(),
                status,
                category,
                observation
            }
            console.log(input)
            const servicesBusiness = new ServicesBusiness()
            const message = await servicesBusiness.services(input)

            res.status(200).send({message})

        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }
}