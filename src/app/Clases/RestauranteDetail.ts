import { Restaurante } from "./Restaurante"

export class RestauranteDetail extends Restaurante {
    constructor(id: number, name: string, opening_year: number,country: string,cuisine: string,rating: number,description: string,image: string){
        super(id,name,opening_year,country,cuisine,rating,description,image)
    }
}
