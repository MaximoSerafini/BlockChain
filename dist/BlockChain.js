"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockChain = void 0;
const process_1 = require("process");
const Bloque_1 = require("./Bloque");
class BlockChain {
    constructor() {
        this.bloques = [];
        this.generarBloqueGenesis();
    }
    generarBloqueGenesis() {
        //Agregar bloques al array
        if (this.bloques.length != 0) {
            process_1.exit;
        }
        else {
            var bloque = new Bloque_1.Bloque();
            this.bloques.push(bloque);
        }
    }
    getBloques() {
        return this.bloques.length;
    }
}
exports.BlockChain = BlockChain;
