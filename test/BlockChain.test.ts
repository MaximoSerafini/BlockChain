import {BlockChain} from "../src/BlockChain";

describe("debeCrearLaBlockChain", () => {
    const blockchain = new BlockChain();
    it("Deberia crear la blockChain", () => {

        expect(blockchain).toBeInstanceOf(BlockChain);
    })
})