import { generateKeyPairSync, privateDecrypt, publicEncrypt } from 'crypto'


const { privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',   //Subject Public Key Info
        format: 'pem',  //-----BEGIN PUBLIC KEY-----
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc', //Encrypt the private key file using AES-256 in CBC mode
        passphrase: 'top secret',// the "password" to encrypt it
    }
})

// console.log(privateKey);
// console.log(publicKey);

const message = "Hey bro how your doing";

const encryptedData = publicEncrypt(publicKey,Buffer.from(message));
console.log("Encrypted message:\n", encryptedData.toString('base64'));

const decryptedData = privateDecrypt(
    {
        key: privateKey,
        passphrase: 'top secret'
    },
    encryptedData
)

console.log("Decrypted message:\n", decryptedData.toString());
