import { BlockChain } from "../src/BlockChain";
import { Bloque } from "../src/Bloque";

describe("debeCrearLaBlockChain", () => {
    const blockchain = new BlockChain();
    it("Deberia crear la blockChain", () => {
        expect(blockchain).toBeInstanceOf(BlockChain);
    })
})

describe("SeCreaElBloqueGenesis", () => {
    const blockchain = new BlockChain();
    
    it("Deberiagenerarelbloquegenesis", () => {
        const bloques = blockchain.getBloques();
        expect(bloques).toBe(1);
    })
})

describe("SoloSeCreaUnBloqueGenesis", () => {
    const blockchain = new BlockChain();

    blockchain.generarBloqueGenesis(); 
    blockchain.generarBloqueGenesis(); 
    blockchain.generarBloqueGenesis(); 
    
    it("Deberiagenerarsolounbloque genesis", () => {
        const bloques = blockchain.getBloques();
        expect(bloques).toBe(1);
    })
})

describe("Verificarcontenidodelbloquegenesis", () => {
    const blockchain = new BlockChain();
    const bloqueGenesis = blockchain["bloques"][0]; // Acceder al primer bloque

    it("Elbloquegenesisdebetenerlaspropiedadesdefinidas", () => {
        expect(bloqueGenesis).toBeInstanceOf(Bloque);
        expect(bloqueGenesis.index).toBeDefined();
        expect(bloqueGenesis.data).toBeDefined();
        expect(bloqueGenesis.hashPrevious).toBeDefined();
        expect(bloqueGenesis.nonce).toBeDefined();
        expect(bloqueGenesis.hash).toBeDefined();
    });
});

describe("PruebaBloque1", () => {
    const blockchain = new BlockChain();
    // Primero agregamos un nuevo bloque a la cadena
    blockchain.agregarBloque("Datos del bloque 1");
    const bloqueUno = blockchain["bloques"][1]; // Ahora sí existe el bloque 1
    
    it("Probandobloque1", () => {
        expect(bloqueUno).toBeInstanceOf(Bloque);
        expect(bloqueUno.index).toBe(1);
        expect(bloqueUno.hashPrevious).toBe(blockchain["bloques"][0].hash);
    });
});