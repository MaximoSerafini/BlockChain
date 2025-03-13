import { Bloque } from "./Bloque";

export class BlockChain {
    private bloques: Bloque[] = [];
    
    constructor() {
        this.generarBloqueGenesis();
    }
    
    generarBloqueGenesis() {
        // Solo generar el bloque génesis si no hay bloques en la cadena
        if (this.bloques.length === 0) {
            const bloqueGenesis = new Bloque();
            this.bloques.push(bloqueGenesis);
        }
    }
    
    getBloques(): number {
        return this.bloques.length;
    }
    
    // Método para agregar un nuevo bloque a la cadena
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
    
    // Método para obtener un bloque específico por índice
    getBloque(index: number): Bloque | undefined {
        if (index >= 0 && index < this.bloques.length) {
            return this.bloques[index];
        }
        return undefined;
    }
}