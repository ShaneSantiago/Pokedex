import { ServicesInputDTO } from "../model/Services";

export class ServicesBusiness {

    async services(input: ServicesInputDTO){

        if(!input.date || !input.status || !input.category || !input.observation){
            throw new Error("Missing fields to complet")
        }

        const service = {
            
        }
    }
}