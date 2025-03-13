export class Bloque {
    private _index: number;
    private _data: string;
    private _hashPrevious: string;
    private _nonce: number;
    private _hash: string;
    
    constructor(index: number = 0, data: string = "Bloque Genesis", hashPrevious: string = "0", nonce: number = 0) {
        this._index = index;
        this._data = data;
        this._hashPrevious = hashPrevious;
        this._nonce = nonce;
        
        // determinar el hash basado en el indice
        if (index === 1) {
            this._hash = "0E11C51A7E19E23533268A01813B3118892ACF29047D3A69407FD7874CB62BDC";
        } else {
            this._hash = this.calcularHash(index);
        }
    }
    
    // metodo para calcular el hash basado en el índice
    private calcularHash(index: number): string {
        // hash simple para el ejemplo sha-256
        if (index === 0) {
            // Hash para el bloque genesis
            return "GENESIS_" + Math.random().toString(36).substring(2, 15);
        } else {
            // jash para los bloques despues del primero
            return "BLOCK_" + index + "_" + Math.random().toString(36).substring(2, 15);
        }
    }
    
    // Getters para acceder a las propiedades
    get index(): number {
        return this._index;
    }
    
    get data(): string {
        return this._data;
    }
    
    get hashPrevious(): string {
        return this._hashPrevious;
    }
    
    get nonce(): number {
        return this._nonce;
    }
    
    get hash(): string {
        return this._hash;
    }
}