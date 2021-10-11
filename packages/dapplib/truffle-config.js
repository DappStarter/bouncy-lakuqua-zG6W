require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name renew mad huge imitate prison equal gasp'; 
let testAccounts = [
"0xc089df175cff70122a7d85650ad053485536e89b9a4071c1fc34432fad3f732d",
"0x39083332309a6f96723d2bca696abf459761f642cd881743fccd4e7f0ae5349c",
"0xbccb9a4764cc74ac21921e88c673fb297fd6ea36f1cc0f34c10120f958396a53",
"0x81bd9ad4033d6ffe238a9cdfe70e9f6a2da39c2e98bbdcf8f6e4b360474f9f82",
"0x75797c8f3d6f87de7ebe35b290555221c84f77ed6da7994af888fffa953a0d58",
"0xead4fd58828ea64714f000b54bc506a32f46a9be40dc13d648f77fe64ea38302",
"0x5d5a427f048d51bb12b9ffaf073db7332743c001c5740c199a0e8c0e0b509e0c",
"0x89a96982d0cc440212f1fdb86271b235fa1fec455f9887ae813849f73507b0ef",
"0x64562ad712df9fe51f8c4a143b66966a44bc307a2503621376864d953bf57371",
"0xbf0085a73d91794a15ec5cf85f60e9bbfcb64b722329c4560af56a4d439853bc"
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
            version: '^0.8.0'
        }
    }
};

