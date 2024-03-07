import jwt from "jsonwebtoken"
const generateTokenandsetCookie = (userId , res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("authToken", token ,{
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days expiry in ms
        httpOnly : true , // prevents Xss attacks cross-site scripting  attacks 
        sameSite : "strict" , // CSRF attacks cross-site request forgery attacks 
        secure: process.env.NODE_ENV!=="development"  //secure will be true when in porduction but false in development mode 

    })
}
export default generateTokenandsetCookie;