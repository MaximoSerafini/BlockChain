import { exit } from "process";
import { Bloque } from "./Bloque";

export class BlockChain{

    private bloques: Bloque[] = [];

    

    constructor() {
        this.generarBloqueGenesis();
    }



    generarBloqueGenesis() {
        //Agregar bloques al array
        if(this.bloques.length != 0){
                   exit
               }else{
                   var bloque = new Bloque ();
                   this.bloques.push(bloque);
               }
    }

    getBloques(): number {
        return this.bloques.length;
    }

}
