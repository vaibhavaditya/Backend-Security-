import { createCipheriv, createDecipheriv, createDiffieHellman, randomBytes } from 'crypto'

console.time('DH Key Exchange Time');

const alice = createDiffieHellman(2048);
const alicePublicKey = alice.generateKeys() // (g^a) % n

const generator = alice.getGenerator(); // extracted the generator g
const prime = alice.getPrime(); // extracted the prime number n

const bob = createDiffieHellman(prime,generator)
const bobPublicKey = bob.generateKeys() // (g^b) % n

// const aliceSecretKey = alice.computeSecret(bobPublicKey).toString('hex')
// const bobSecretKey = bob.computeSecret(alicePublicKey).toString('hex')

const sharedSecret = alice.computeSecret(bobPublicKey);

// console.log("Alice's Secret:", aliceSecretKey);
// console.log("Bob's Secret:  ", bobSecretKey);
// console.log("Secrets match:", aliceSecretKey.equals(bobSecretKey));

//enscrption
const key = sharedSecret.subarray(0,32);
const iv = randomBytes(16)

const message = "Hello from Alice!";
const cipher = createCipheriv('aes-256-cbc',key,iv);
const encryption = cipher.update(message,'utf-8','hex') + cipher.final('hex');
console.log("Encrypted:", encryption);


//decryption

const decipher = createDecipheriv('aes-256-cbc',key,iv);
const decryption = decipher.update(encryption,'hex','utf-8') + decipher.final('utf-8');
console.log("Decrypted:", decryption);

console.timeEnd('DH Key Exchange Time');