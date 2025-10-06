import { uuid } from "uuidv4";

export class Driver {

    constructor(name, id){
        this.name = name

        if(!id){
            this.id = uuid()
        }
    }
}