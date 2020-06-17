require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind evil hunt father flip tattoo'; 
let testAccounts = [
"0xc9730105cd07933cd977210b20f222440abbaa1c1bcadb96eab0817c8566ae36",
"0xaa5af3b2f1a7d178993bc53d56fc17a367ab9657351334e98449b689c8040ab0",
"0x31e6166d69df2502af42f7cac90954a3e6687bd14046aefb4e62e106dbd3f27d",
"0x69813faa143364c0c3cd981493d19115d021a1d93674066eec43ff8d15edfd7e",
"0xe38cd45381c2991efd276e4ae1ae6781de50b4196f469a5041096c286ccf3971",
"0xd4d073cd16ad79adb26bc21f05ad4fec4444b794770faa35aa0fd675b10c16e9",
"0xb4bae6da889b6acc1c64c57e38be05552ebda48b5f6c22d74552bf7c77580560",
"0x68094ca2f7c28568f0379aeb2a4ff1fce6e164b25f8be2a4ad109a48bdf0a1db",
"0xce3309013192d45d734ea8f6b1cdfb7abfe5a83ffcec7b205c9d326f6d3609c4",
"0xfd5cf514faf9754f33c72775440b689684aae3cca2ee9fc734c0dd4dcedc5f4f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
