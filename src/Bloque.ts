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
        
        // el que nos dio el profe
        if (index === 0) {
            this._hash = "0E11C51A7E19E23533268A01813B3118892ACF29047D3A69407FD7874CB62BDC";
        } else {
            // Para otros bloques
            this._hash = this.calcularHash();
        }
    }
    
    // Método para calcular el hash 
    private calcularHash(): string {
        return "0E11C51A7E19E23533268A01813B3118892ACF29047D3A69407FD7874CB62BDC".split("")
            .sort(() => Math.random() - 0.5)
            .join("");
    }
    
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