import {BlockChain} from "../src/BlockChain";

describe("debeCrearLaBlockChain", () => {
    const blockchain = new BlockChain();
    it("Deberia crear la blockChain", () => {

        expect(blockchain).toBeInstanceOf(BlockChain);
        
    })
})

describe("SeCreaElBloqueGenesis", () => {
    const blockchain = new BlockChain();
    

    it("Deberia generar el bloque genesis", () => {

        const bloques = blockchain.getBloques();
        expect(bloques).toBe(1);
        
    })
})

describe("SoloSeCreaUnBloqueGenesis", () => {
    const blockchain = new BlockChain();

     blockchain.generarBloqueGenesis(); 
     blockchain.generarBloqueGenesis(); 
     blockchain.generarBloqueGenesis(); 
    

    it("Deberia generar solo un bloque genesis", () => {
        const bloques = blockchain.getBloques();
        expect(bloques).toBe(1);
    })
})

//Crear un bloque con las propiedades requeridas (index,data,hashPrevious, nonce y hash)

describe(" Crear un bloque con propiedades", () => {
    const blockchain = new BlockChain();

    
})