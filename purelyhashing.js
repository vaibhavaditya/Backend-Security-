// basic hashing without salt
import crypto, { createHash } from 'crypto'

const hash = (input)=>{
    return createHash('sha256').update(input).digest('hex')
}

let password1 = "1234"
//let password2 = "myPassword"
const hasedPassword1 = hash(password1);
//const hasedPassword2 = hash(password2);

// both the password looks the same as its normal hashing
console.log("My hashed password: " ,hasedPassword1);
//console.log("My hashed password: " ,hasedPassword2);
