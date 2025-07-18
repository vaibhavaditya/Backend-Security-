import { createHash, generateKeyPairSync, createECDH, createCipheriv, createDecipheriv,randomBytes} from 'crypto'

console.time('DH Key Exchange Time');

const alice = createECDH('secp256k1');
const bob = createECDH('secp256k1');

alice.generateKeys();
bob.generateKeys();

const alicePublicKey = alice.getPublicKey();
const bobPublicKey = bob.getPublicKey();

const aliceSecretKey = alice.computeSecret(bobPublicKey);
const bobSecretKey = bob.computeSecret(alicePublicKey);

// console.log("Alice Shared Secret:", aliceSecretKey.toString('hex'));
// console.log("Bob Shared Secret:  ", bobSecretKey.toString('hex'));
// console.log("Shared secret match:", aliceSecretKey.equals(bobSecretKey));


const message = "hey bob"
const key = createHash('sha256').update(aliceSecretKey).digest();
const iv = randomBytes(16);

//encryption

const cipher = createCipheriv('aes-256-cbc',key,iv);
const encryption = cipher.update(message,'utf-8','hex') + cipher.final('hex');
console.log("Encrypted:", encryption);

//decryption

const decipher = createDecipheriv('aes-256-cbc',key,iv);
const decryption = decipher.update(encryption,'hex','utf-8') + decipher.final('utf-8');
console.log("Decrypted:", decryption);

console.timeEnd('DH Key Exchange Time');
