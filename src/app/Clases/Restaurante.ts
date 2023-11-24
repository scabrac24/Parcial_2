export class Restaurante {
    id: number;
    name: string;
    opening_year: number;
    country: string;
    cuisine: string;
    rating: number;
    description: string;
    image: string;
    
    


    constructor(id: number, name: string, opening_year: number,country: string,cuisine: string,rating: number,description: string,image: string){
        this.id = id
        this.name = name;
        this.country = country;
        this.cuisine = cuisine;
        this.opening_year = opening_year;
        this.image = image;
        this.description = description;
        this.rating = rating;
    }
}
