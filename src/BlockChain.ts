import { Bloque } from "./Bloque";

export class BlockChain {


    verificarIntegridadBloque(bloque: Bloque): boolean{
        //verficar si el hash del bloque coincide con el hash calculado
        const hashCalculado = this.calcularHashDelBloque(bloque);
        if (bloque.hash !=== hashCalculado){
            return false;
        }

    
    }
    private bloques: Bloque[] = [];
    private dificultad: number = 0;
    
    constructor(dificultad: number=1) {
        this.generarBloqueGenesis();
        this.dificultad = dificultad;
    }
    
    generarBloqueGenesis() {
        if (this.bloques.length === 0) {
            const bloqueGenesis = new Bloque();
            this.bloques.push(bloqueGenesis);
        }
    }
    
    getBloques(): number {
        return this.bloques.length;
    }
    
    agregarBloque(data: string): Bloque {
        const ultimoBloque = this.bloques[this.bloques.length - 1];
        const nuevoIndex = ultimoBloque.index + 1;
        const nuevoBloque = new Bloque(
            nuevoIndex,
            data,
            ultimoBloque.hash,
            0, // nonce inicial
            this.dificultad // Pasar dificultad al bloque
        );

        this.bloques.push(nuevoBloque);
        return nuevoBloque;
    }
    
    getBloque(index: number): Bloque | undefined {
        if (index >= 0 && index < this.bloques.length) {
            return this.bloques[index];
        }
        return undefined;
    }

    getListaBloque(): Bloque[]{
        return this.bloques;
    }
}