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
        const bloques = blockchain.getCantidadBloques();
        expect(bloques).toBe(1);
    })
})

describe("SoloSeCreaUnBloqueGenesis", () => {
    const blockchain = new BlockChain();

    blockchain.generarBloqueGenesis(); 
    blockchain.generarBloqueGenesis(); 
    blockchain.generarBloqueGenesis(); 
    
    it("DeberiaGenerarSoloBloqueGenesis", () => {
        const bloques = blockchain.getCantidadBloques();
        expect(bloques).toBe(1);
    })
})

describe("VerificarContenidoDelBloqueGenesis", () => {
    const blockchain = new BlockChain();
    const bloqueGenesis = blockchain["bloques"][0]; // Acceder al primer bloque

    it("ElBloqueGenesisTieneLasPropiedades", () => {
        expect(bloqueGenesis).toBeInstanceOf(Bloque);
        expect(bloqueGenesis.index).toBeDefined();
        expect(bloqueGenesis.data).toBeDefined();
        expect(bloqueGenesis.hashPrevious).toBeDefined();
        expect(bloqueGenesis.nonce).toBeDefined();
        expect(bloqueGenesis.hash).toBeDefined();
    });
});

describe("VerificarContenidoDelBloqueGenesisHash0", () => {
    const blockchain = new BlockChain();

    blockchain.agregarBloque("bloque");
    blockchain.agregarBloque("bloque2")
   
    const bloqueGenesis = blockchain["bloques"][0]; // Acceder al primer bloque
    const bloque1 = blockchain["bloques"][1];
    const bloque2 = blockchain["bloques"][2]; 

    it("ElBloqueGenesisTieneLasPropiedades", () => {
        expect(bloqueGenesis.hash).toBe("0"); 
        expect(blockchain.getListaBloque().length).toBe(3);
    });

    it("ElBloqueGenesisTieneLasPropiedades", () => {
        expect(bloque1.hashPrevious).toBe("0"); 
        expect(bloque2.hashPrevious).toBe(bloque1.hash); 
    });
});

describe("MinandoBloquesDificultad1", () =>{
    const blockChain = new BlockChain(1);

    blockChain.agregarBloque("Bloque");
    blockChain.agregarBloque("Bloque2"); 
    blockChain.agregarBloque("Bloque3");
    blockChain.agregarBloque("Bloque4");  


    const bloque1 = blockChain["bloques"][1];
    const bloque2 = blockChain["bloques"][2];
    const bloque3 = blockChain["bloques"][3];
    const bloque4 = blockChain["bloques"][4];

    it("Minado de bloque", () => {
        expect(bloque2.hash.startsWith("0")).toBe(true);
    })
    it("Minado de bloque", () => {
        expect(bloque3.hash.startsWith("0")).toBe(true);
    })
    it("Minado de bloque", () => {
        expect(bloque4.hash.startsWith("0")).toBe(true);
    })

})



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

describe("VerificarFuncionParaCalcularHash", () => {

    it("El hash debe ser consistente", () => {
        const bloque = new Bloque(1,"Datos de prueba","0000000000000000000000000000000000000000000000000000000000000000", 123);
        const otroBloque = new Bloque(1, "Datos de prueba", "0000000000000000000000000000000000000000000000000000000000000000", 123);
        
        expect(bloque.hash).toBe(otroBloque.hash);
    })
    it("El hash debe cambiar ", () => {
        const bloque1 = new Bloque(1, "Datos de prueba", "0000000000000000000000000000000000000000000000000000000000000000", 23);
        const bloque2 = new Bloque(2, "Datos de prueba", "0000000000000000000000000000000000000000000000000000000000000000", 123);
        
        expect(bloque1.hash).not.toBe(bloque2.hash);
    });

})

describe("VerificarHashesDeBloquesPosteriores", () => {
    const blockchain = new BlockChain();
    blockchain.agregarBloque("Datos del bloque 1");
    blockchain.agregarBloque("Datos del bloque 2");
    blockchain.agregarBloque("Datos del bloque 3");
    
    const bloqueUno = blockchain["bloques"][1];
    const bloqueDos = blockchain["bloques"][2];
    const bloqueTres = blockchain["bloques"][3];

    it("Bloques posteriores deben tener hashes diferentes", () => {
        expect(bloqueUno.hash).toBe("0E11C51A7E19E23533268A01813B3118892ACF29047D3A69407FD7874CB62BDC");
        expect(bloqueDos.hash).not.toBe(bloqueUno.hash && bloqueTres.hash);
        expect(bloqueTres.hash).not.toBe(bloqueUno.hash && bloqueDos.hash);
        expect(bloqueDos.hash).not.toBe(bloqueTres.hash);
    });
});

describe("Dificultad de minado 1", () => {
    it("Los bloques deben cumplir con la dificultad 1", () => {
        const blockchain = new BlockChain(2);
        blockchain.agregarBloque("bloque con dificultad 1");
        blockchain.agregarBloque("Otro bloque con dificultad 1 (el otro es fijo)")
        const bloqueMinado = blockchain["bloques"][2]; 
        expect(bloqueMinado.hash.startsWith("00")).toBe(true);
    });
});
