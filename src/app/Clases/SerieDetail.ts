import { Serie } from "./Serie";

export class SerieDetail extends Serie{
    constructor(id: number, name: string, channel: string, seasons: number, poster: string, description: string, webpage: string  ){
        super(id,name,channel,seasons,poster,description,webpage);
    }
}
