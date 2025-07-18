import {scryptSync,randomBytes, timingSafeEqual} from 'crypto'
const users = []
const signup = (email,password) => {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password,salt,64).toString('');
    const user = {email,password: `${salt}:${hashedPassword}`}
    users.push(user)
}

const login = (email,password)=>{
    const user = users.find((v) => v.email===email)
    
    const [salt,key] = user.password.split(':');
    const hashedPassword = scryptSync(password,salt,64)
    const keyBuffer = Buffer.from(key,'hex');
    // console.log("Input hashed:", hashedPassword);
    // console.log("Stored hash:", key);

    const check = timingSafeEqual(hashedPassword,keyBuffer);
    if(check){
        console.log("login Successful");
    } else{
        console.log("invalid credentials");
        
    }
}

signup("hello@123","1234");
login("hello@123","1234");
// for( const user of users){
//     console.log(`email: ${user.email} and Password: ${user.password}`);
// }