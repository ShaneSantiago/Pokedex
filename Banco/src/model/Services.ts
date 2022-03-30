export interface ServicesInputDTO {
    date: string,
    status: string,
    category: string,
    observation: string
}

export interface ServicesInsertDTO  extends ServicesInputDTO{
    id: string
}