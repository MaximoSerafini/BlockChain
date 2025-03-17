import * as crypto from 'crypto';

export class Bloque {
    private _index: number;
    private _data: string;
    private _hashPrevious: string;
    private _nonce: number;
    private _hash: string;
    
    constructor(index: number = 0, data: string = "Bloque Genesis", hashPrevious: string = "0", nonce: number = 0, dificultad: number = 1) {
        this._index = index;
        this._data = data;
        this._hashPrevious = hashPrevious;
        this._nonce = nonce;
        
        // El caso especial para el bloque génesis
        if(index === 0) {
            this._hash = "0";
            return;
        }
        
        // Para todos los demás bloques, calcular el hash y minar
        this._hash = this.calcularHash();
        this.minarBloque(dificultad);
    }

    minarBloque(dificultad:number):void{
        const prefijo = "0".repeat(dificultad);
        while(!this._hash.startsWith(prefijo)){
            this._nonce++;
            this._hash = this.calcularHash();
        }
    }
    
    private calcularHash(): string {
        const data = this._index + this._hashPrevious + this._data + this._nonce;
        return crypto.createHash('sha256').update(data).digest('hex').toUpperCase();
    }
    
    public esValido(dificultad: number): boolean {
        const hash = this.calcularHash();
        const prefijo = '0'.repeat(dificultad);
        return this.hash === hash && this.hash.startsWith(prefijo);
    }

    // Getters (sin cambios)
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

    set hash(value: string) {
        this._hash = value;
    }

    
}