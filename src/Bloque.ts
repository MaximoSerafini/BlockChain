import * as crypto from 'crypto';

export class Bloque {
    private _index: number;
    private _data: string;
    private _hashPrevious: string;
    private _nonce: number;
    private _hash: string;
    
    constructor(index: number = 0, data: string = "Bloque Genesis", hashPrevious: string = "0", nonce: number = 0,dificultad: number = 1) {
        this._index = index;
        this._data = data;
        this._hashPrevious = hashPrevious;
        this._nonce = nonce;
        this._hash = this.calcularHash();

        if(index !== 0 ){
            this.minarBloque(dificultad);
        }
        
        // determinar el hash basado en el indice
        if (index === 1) {
            this._hash = "0E11C51A7E19E23533268A01813B3118892ACF29047D3A69407FD7874CB62BDC";
        } else {
            this._hash = this.calcularHash();
        }

        if(index === 0){
            this._hash = "0"
        }
    }

    minarBloque(dificultad:number):void{
        const prefijo = "0".repeat(dificultad);
        while(!this._hash.startsWith(prefijo)){
            this._nonce++;
            this._hash = this.calcularHash();
        }
    }
    
    // metodo para calcular el hash basado en el índice
    private calcularHash(): string {
        const data = this._index + this._hashPrevious + this._data + this._nonce;
        return crypto.createHash('sha256').update(data).digest('hex').toUpperCase();
    }
    
    public esValido(dificultad: number): boolean {
        const hash = this.calcularHash();
        const prefijo = '0'.repeat(dificultad);
        return this.hash === hash && this.hash.startsWith(prefijo)
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