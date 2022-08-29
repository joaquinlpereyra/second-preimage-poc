import pkg from 'ethers-merkletree';
const { WMerkleTree, LeafSignature } = pkg;


let myAllowList = [
  {
    price: 1
  },
  {
    price: 2
  },
  {
    price: 3
  },
  {
    price: 4
  },
  {
    price: 5
  },
  {
    price: 6
  },
  {
    price: 7
  },
  {
    price: 8
  }
];

let leafSignature = [
  { type: 'uint256', name: 'price' },
];

let merkleTree = new WMerkleTree(myAllowList, leafSignature);
console.log(merkleTree.merkleTree);


let proofOfPrice1 = merkleTree.getHexProof(0);

console.log(proofOfPrice1);

let myBadPrice = '0x2a171b5bcd1449348c3e09a5424946b5e6d6f5471221941d585131d673952ee4'
let proof = ['0x58dedfa8c8510aa7a44a262de0df204bc81f3b437741b6b63212d1173a876672', '1ae795286c5dd0cad1dd38aef9a3015558e9d303ec7474e5e59abc16a43abbd6']

console.log(merkleTree.leaves);
console.log(merkleTree.merkleTree.verify(proof, myBadPrice, merkleTree.getHexRoot()))
