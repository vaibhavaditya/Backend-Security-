import { createCipheriv, randomBytes, createDecipheriv} from 'crypto'

const message = "Hey how are you"
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes-256-cbc', key, iv)

//Encrption
// TAKES THE INPUT => MESSAGE
// COVERTS THSU UTF-8 INTO BYTES
//EXCRYPTS IT
//CONVERTS THIS INTO SOMT=THING PRINTABLE
// final adds padding("HELLO" → only 5 bytes AES expects: 16 bytes → so 11 padding bytes are added )
const encrptedMessage = cipher.update(message,'utf-8','hex') + cipher.final('hex');
console.log("Encrypted:", encrptedMessage);

const decipher = createDecipheriv('aes-256-cbc',key,iv);

// Takes the encrypted data (encryptedMessage)

// 'hex' means it expects the data in hex format

// 'utf-8' means it will output a string in UTF-8


const decryptedMessage = decipher.update(encrptedMessage,'hex','utf-8') + decipher.final('utf-8')
console.log("Decrypted:", decryptedMessage);