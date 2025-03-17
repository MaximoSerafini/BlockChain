import { Bloque } from "./Bloque";

export class BlockChain {
    public bloques: Bloque[] = [];
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
    
    getCantidadBloques(): number {
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

    esCadenaValida(): boolean {
        for (let i = 1; i < this.bloques.length; i++) {
            const bloqueActual = this.bloques[i];
            const bloqueAnterior = this.bloques[i - 1];
    
            if (bloqueActual.hashPrevious !== bloqueAnterior.hash) {
                    return false;
                }
    
            if (!bloqueActual.esValido(this.dificultad)) {
                    return false;
                }
            }
            return true;
        }
}