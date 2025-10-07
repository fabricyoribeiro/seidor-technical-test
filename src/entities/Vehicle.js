import { uuid } from "uuidv4";

export class Vehicle {

    constructor ({plate, color, brand, id}){
        this.plate = plate,
        this.color = color,
        this.brand = brand,

        if(!id){
            this.id = uuid()
        }
    }
}