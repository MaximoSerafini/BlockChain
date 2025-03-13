import { Bloque } from "./Bloque";

export class BlockChain {
    private bloques: Bloque[] = [];
    
    constructor() {
        this.generarBloqueGenesis();
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
            0 // nonce inicial
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
}